import { slugToString, stringToSlug } from "@/routeutils";

import Link from "next/link";
import { notFound } from "next/navigation";
import { testamentMap } from "@/testaments";
import ReadingLayout from "@/app/components/ReadingLayout";

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

  const maybeBook = maybeTestament.books.find((book) => book.bookTitle === bookName);

  if (maybeBook === undefined) {
    return notFound();
  }

  const { chapters, subtitle, summary } = maybeBook;

  const maybeChapter = chapters.find((chapter) => chapter.chapterTitle === chapterName);

  if (maybeChapter === undefined) {
    return notFound();
  }

  const chapter = {
    ...maybeChapter,
  };

  const isChapter1 = chapterName === "Ĉapitro 1";

  return (
    <ReadingLayout
      title={bookName}
      subtitle={subtitle && isChapter1 ? subtitle : undefined}
      summary={summary && isChapter1 ? summary : undefined}
    >
      <section>
        <h2>{chapterName}</h2>

        {chapter.chapterSubtitle ? (
          <p className="pericope-title">{chapter.chapterSubtitle}</p>
        ) : null}

        {chapter.summary ? <p className="reading-summary">{chapter.summary}</p> : null}

        <div data-br-stack="gutter:size3">
          {chapter.verses.map((verse, i) => {
            return (
              <p key={verse}>
                <span className="verse-number">{i + 1}</span>
                {verse}
              </p>
            );
          })}
        </div>

        {chapter.footNotes ? (
          <footer>
            {chapter.footNotes.map((footNote) => (
              <p key={footNote}>
                <em>{footNote}</em>
              </p>
            ))}
          </footer>
        ) : null}
      </section>
    </ReadingLayout>
  );
}
