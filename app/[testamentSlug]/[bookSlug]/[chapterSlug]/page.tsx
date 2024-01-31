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

  const { chapters, subtitle, summary } = maybeBook;

  const maybeChapter = chapters.find(
    (chapter) => chapter.chapterTitle === chapterName,
  );

  if (maybeChapter === undefined) {
    console.log("maybeChapter", maybeChapter, chapterName);
    return notFound();
  }

  const chapter = {
    ...maybeChapter,
  };

  const isChapter1 = chapterName === "Ĉapitro 1";

  return (
    <main>
      <section data-bedrock-stack="gutter:size5">
        <header data-bedrock-stack="gutter:size3">
          <h1>{bookName}</h1>
          {subtitle && isChapter1 ? <p>{subtitle}</p> : null}
          {summary && isChapter1 ? <em>{summary}</em> : null}
        </header>

        <h2>{chapterName}</h2>
        <em>{chapter.summary}</em>
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
