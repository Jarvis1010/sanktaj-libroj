import { slugToString, stringToSlug } from "@/routeutils";

import Link from "next/link";
import { notFound } from "next/navigation";
import { testamentMap } from "@/testaments";

export default function Book({
  params,
}: {
  params: { testamentSlug: string; bookSlug: string };
}) {
  const { testamentSlug, bookSlug } = params;

  const testamentName = slugToString(testamentSlug);
  const bookName = slugToString(bookSlug);

  const maybeTestament =
    testamentName in testamentMap
      ? testamentMap[testamentName as keyof typeof testamentMap]
      : undefined;

  if (maybeTestament === undefined) {
    return notFound();
  }

  const maybeBook = maybeTestament.books.find(
    (book) => book.bookTitle === bookName,
  );

  if (maybeBook === undefined) {
    return notFound();
  }

  const book = {
    ...maybeBook,
    chapters: maybeBook.chapters.map((chapter) => ({
      chapterTitle: chapter.chapterTitle,
      chapterSlug: stringToSlug(chapter.chapterTitle),
      summary: chapter.summary,
    })),
  };

  return (
    <main data-bedrock-stack="gutter:size5">
      <h1>{book.bookTitle}</h1>
      <ul className="chapter-list" data-bedrock-stack="gutter:size3">
        {book.chapters.map((chapter) => {
          return (
            <li data-bedrock-stack="gutter:size1" key={chapter.chapterTitle}>
              <Link
                href={`/${testamentSlug}/${bookSlug}/${stringToSlug(
                  chapter.chapterTitle,
                )}`}
              >
                {chapter.chapterTitle}
              </Link>
              {chapter.summary ? <em>{chapter.summary}</em> : null}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
