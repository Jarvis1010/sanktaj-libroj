"use client";

import { useEffect, useMemo, useState } from "react";
import "./ReadingTools.css";

type ReadingToolsProps = {
  verseCount: number;
  testamentSlug: string;
  bookSlug: string;
  chapterSlug: string;
  testamentTitle: string;
  bookTitle: string;
  chapterTitle: string;
};

export default function ReadingTools({
  verseCount,
  testamentSlug,
  bookSlug,
  chapterSlug,
  testamentTitle,
  bookTitle,
  chapterTitle,
}: ReadingToolsProps) {
  const [selectedVerse, setSelectedVerse] = useState("1");

  const verseOptions = useMemo(
    () => Array.from({ length: verseCount }, (_, index) => `${index + 1}`),
    [verseCount]
  );

  useEffect(() => {
    const lastReading = {
      testamentSlug,
      bookSlug,
      chapterSlug,
      testamentTitle,
      bookTitle,
      chapterTitle,
    };
    localStorage.setItem("sanktaj-libroj-last-reading", JSON.stringify(lastReading));
  }, [testamentSlug, bookSlug, chapterSlug, testamentTitle, bookTitle, chapterTitle]);

  const handleJump = (event: React.FormEvent) => {
    event.preventDefault();
    const target = document.getElementById(`verse-${selectedVerse}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#verse-${selectedVerse}`);
    }
  };

  return (
    <section className="reading-tools" data-br-stack="gutter:size4">
      <form className="jump-to-verse" data-br-inline="gutter:size2" onSubmit={handleJump}>
        <label htmlFor="jump-to-verse">Jump to verse</label>
        <select
          id="jump-to-verse"
          value={selectedVerse}
          onChange={(event) => setSelectedVerse(event.target.value)}
        >
          {verseOptions.map((verse) => (
            <option key={verse} value={verse}>
              {verse}
            </option>
          ))}
        </select>
        <button type="submit">Go</button>
      </form>
    </section>
  );
}
