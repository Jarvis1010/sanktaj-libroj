import { slugToString, stringToSlug } from "@/routeutils";

import Link from "next/link";
import { notFound } from "next/navigation";
import { testamentMap } from "@/testaments";

export default function Chapter({
  params,
}: {
  params: { testamentSlug: string; bookSlug: string; chapterSlug: string };
}) {
  const { testamentSlug, bookSlug, chapterSlug } = params;

  const testamentName = slugToString(testamentSlug);
  const bookName = slugToString(bookSlug);
  const chapterName = slugToString(chapterSlug);

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

  const maybeChapter = maybeBook?.chapters.find(
    (chapter) => chapter.chapterTitle === chapterName,
  );

  if (maybeChapter === undefined) {
    return notFound();
  }

  const chapter = {
    ...maybeChapter,
  };

  return (
    <main>
      <h1>{chapter.chapterTitle}</h1>
      <section data-bedrock-stack="gutter:size3">
        {chapter.verses.map((verse, i) => {
          return (
            <p key={verse}>
              {i + 1}. {verse}
            </p>
          );
        })}
      </section>
    </main>
  );
}
