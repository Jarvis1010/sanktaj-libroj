"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import "./search.css";

type TestamentIndexResponse = {
  testaments: string[];
  testamentSlugMap: Record<string, string>;
};

type TestamentResponse = {
  testamentTitle: string;
  books: { bookSlug: string; bookTitle: string; bookTitleShort?: string }[];
};

type BookResponse = {
  bookTitle: string;
  chapters: { chapterTitle: string; chapterSlug: string }[];
};

type ChapterResponse = {
  chapterTitle: string;
  verses: string[];
};

type SearchResult = {
  href: string;
  testamentTitle: string;
  bookTitle: string;
  chapterTitle: string;
  verseNumber: number;
  verseText: string;
};

type Scope = "global" | "testament" | "book";

const MAX_RESULTS = 200;

const normalizeEsperanto = (text: string) =>
  text
    .toLowerCase()
    .replace(/ĉ/g, "c")
    .replace(/ĝ/g, "g")
    .replace(/ĥ/g, "h")
    .replace(/ĵ/g, "j")
    .replace(/ŝ/g, "s")
    .replace(/ŭ/g, "u");

export default function SearchClient() {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<Scope>("global");
  const [testaments, setTestaments] = useState<{ title: string; slug: string }[]>([]);
  const [books, setBooks] = useState<{ title: string; slug: string }[]>([]);
  const [selectedTestament, setSelectedTestament] = useState<string>("");
  const [selectedBook, setSelectedBook] = useState<string>("");
  const [isLoadingTestaments, setIsLoadingTestaments] = useState(true);
  const [testamentsError, setTestamentsError] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const searchToken = useRef(0);
  const resultsCountRef = useRef(0);

  useEffect(() => {
    const loadTestaments = async () => {
      setIsLoadingTestaments(true);
      setTestamentsError("");
      try {
        const response = await fetch("/api/testaments");
        if (!response.ok) {
          throw new Error(`Failed to load testaments: ${response.status}`);
        }
        const data = (await response.json()) as TestamentIndexResponse;
        const mapped = data.testaments.map((title) => ({
          title,
          slug: data.testamentSlugMap[title],
        }));
        setTestaments(mapped);
      } catch (error) {
        console.error("Failed to load testaments", error);
        setTestamentsError("Unable to load collections right now. Please try again.");
        setTestaments([]);
      } finally {
        setIsLoadingTestaments(false);
      }
    };

    loadTestaments();
  }, []);

  useEffect(() => {
    if (!selectedTestament) {
      setBooks([]);
      setSelectedBook("");
      return;
    }

    const loadBooks = async () => {
      const response = await fetch(`/api/testaments/${selectedTestament}`);
      if (!response.ok) return;
      const data = (await response.json()) as TestamentResponse;
      setBooks(data.books.map((book) => ({ title: book.bookTitle, slug: book.bookSlug })));
    };

    loadBooks();
  }, [selectedTestament]);

  const normalizedQuery = useMemo(() => normalizeEsperanto(query.trim()), [query]);

  const searchChapters = async (
    testamentSlug: string,
    testamentTitle: string,
    bookSlug: string,
    bookTitle: string,
    chapterList: { chapterTitle: string; chapterSlug: string }[],
    token: number
  ) => {
    for (const chapter of chapterList) {
      if (searchToken.current !== token || resultsCountRef.current >= MAX_RESULTS) {
        return;
      }

      const chapterResponse = await fetch(
        `/api/testaments/${testamentSlug}/${bookSlug}/${chapter.chapterSlug}`
      );
      if (!chapterResponse.ok) continue;
      const chapterData = (await chapterResponse.json()) as ChapterResponse;

      for (let index = 0; index < chapterData.verses.length; index += 1) {
        if (searchToken.current !== token || resultsCountRef.current >= MAX_RESULTS) {
          break;
        }

        const verseText = chapterData.verses[index];

        if (normalizeEsperanto(verseText).includes(normalizedQuery)) {
          resultsCountRef.current += 1;
          setResults((prev) =>
            prev.length >= MAX_RESULTS
              ? prev
              : [
                  ...prev,
                  {
                    href: `/${testamentSlug}/${bookSlug}/${chapter.chapterSlug}`,
                    testamentTitle,
                    bookTitle,
                    chapterTitle: chapter.chapterTitle,
                    verseNumber: index + 1,
                    verseText,
                  },
                ]
          );
        }
      }
    }
  };

  const handleSearch = async () => {
    if (!normalizedQuery) {
      setResults([]);
      resultsCountRef.current = 0;
      setStatusMessage("Enter a search term to begin.");
      return;
    }

    if (scope !== "global" && !selectedTestament) {
      setResults([]);
      resultsCountRef.current = 0;
      setStatusMessage("Select a collection to narrow the search.");
      return;
    }

    if (scope === "book" && !selectedBook) {
      setResults([]);
      resultsCountRef.current = 0;
      setStatusMessage("Select a book to narrow the search.");
      return;
    }

    const token = searchToken.current + 1;
    searchToken.current = token;
    setResults([]);
    resultsCountRef.current = 0;
    setIsSearching(true);
    setStatusMessage("Searching... This may take a moment.");

    const targetTestaments =
      scope === "testament" || scope === "book"
        ? testaments.filter((t) => t.slug === selectedTestament)
        : testaments;

    for (const testament of targetTestaments) {
      if (searchToken.current !== token) break;

      const testamentResponse = await fetch(`/api/testaments/${testament.slug}`);
      if (!testamentResponse.ok) continue;
      const testamentData = (await testamentResponse.json()) as TestamentResponse;

      const targetBooks =
        scope === "book"
          ? testamentData.books.filter((book) => book.bookSlug === selectedBook)
          : testamentData.books;

      for (const book of targetBooks) {
        if (searchToken.current !== token) break;

        const bookResponse = await fetch(`/api/testaments/${testament.slug}/${book.bookSlug}`);
        if (!bookResponse.ok) continue;
        const bookData = (await bookResponse.json()) as BookResponse;

        await searchChapters(
          testament.slug,
          testamentData.testamentTitle,
          book.bookSlug,
          book.bookTitle,
          bookData.chapters,
          token
        );
      }
    }

    if (searchToken.current === token) {
      setIsSearching(false);
      setStatusMessage(
        resultsCountRef.current
          ? `Found ${resultsCountRef.current} result${resultsCountRef.current === 1 ? "" : "s"}.`
          : "No results found."
      );
    }
  };

  return (
    <main className="search-page" data-br-stack="gutter:size6">
      <header data-br-stack="gutter:size2">
        <h1>Search</h1>
        <p>Find verses across the library. Search runs entirely in your browser.</p>
      </header>

      <section className="search-controls" data-br-stack="gutter:size4">
        {isLoadingTestaments ? (
          <p role="status" aria-live="polite">
            Loading collections...
          </p>
        ) : null}
        {!isLoadingTestaments && testaments.length === 0 && testamentsError ? (
          <p role="status" aria-live="polite">
            {testamentsError}
          </p>
        ) : null}
        <div className="search-field" data-br-stack="gutter:size2">
          <label htmlFor="search-query">Search terms</label>
          <input
            id="search-query"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Enter a verse or phrase"
          />
        </div>

        <div className="search-field" data-br-stack="gutter:size2">
          <label htmlFor="search-scope">Search scope</label>
          <select
            id="search-scope"
            value={scope}
            onChange={(event) => setScope(event.target.value as Scope)}
          >
            <option value="global">Entire library</option>
            <option value="testament">Collection</option>
            <option value="book">Book</option>
          </select>
        </div>

        <div className="search-field" data-br-stack="gutter:size2">
          <label htmlFor="search-testament">Collection</label>
          <select
            id="search-testament"
            value={selectedTestament}
            onChange={(event) => setSelectedTestament(event.target.value)}
            disabled={scope === "global"}
          >
            <option value="">Select a collection</option>
            {testaments.map((testament) => (
              <option key={testament.slug} value={testament.slug}>
                {testament.title}
              </option>
            ))}
          </select>
        </div>

        <div className="search-field" data-br-stack="gutter:size2">
          <label htmlFor="search-book">Book</label>
          <select
            id="search-book"
            value={selectedBook}
            onChange={(event) => setSelectedBook(event.target.value)}
            disabled={scope !== "book" || !selectedTestament}
          >
            <option value="">Select a book</option>
            {books.map((book) => (
              <option key={book.slug} value={book.slug}>
                {book.title}
              </option>
            ))}
          </select>
        </div>

        <div className="search-actions" data-br-inline="gutter:size3">
          <button type="button" onClick={handleSearch} disabled={isSearching}>
            {isSearching ? "Searching..." : "Search"}
          </button>
          <button
            type="button"
            className="secondary"
            onClick={() => {
              setQuery("");
              setResults([]);
              resultsCountRef.current = 0;
              setStatusMessage("");
              searchToken.current += 1;
            }}
          >
            Clear
          </button>
        </div>
      </section>

      <section className="search-results" data-br-stack="gutter:size3">
        <h2>Results</h2>
        <p>{statusMessage}</p>

        <div className="results-list" data-br-stack="gutter:size3">
          {results.map((result, index) => (
            <article
              key={`${result.href}-${index}`}
              className="result-item"
              data-br-stack="gutter:size2"
            >
              <div className="result-meta" data-br-inline="gutter:size2">
                <span>{result.testamentTitle}</span>
                <span>·</span>
                <span>{result.bookTitle}</span>
                <span>·</span>
                <span>{result.chapterTitle}</span>
                <span>·</span>
                <span>Verse {result.verseNumber}</span>
              </div>
              <p>{result.verseText}</p>
              <Link href={result.href}>Open chapter</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
