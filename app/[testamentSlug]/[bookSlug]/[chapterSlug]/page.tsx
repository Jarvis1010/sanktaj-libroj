import { slugToString, stringToSlug } from "@/routeutils";

import Link from "next/link";
import { notFound } from "next/navigation";
import { testamentMap } from "@/testaments";
import ReadingLayout from "@/app/components/ReadingLayout";
import BreadCrumbs, { BreadCrumbItem } from "@/app/BreadCrumbs";

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

  const chapterIndex = chapters.findIndex((chapter) => chapter.chapterTitle === chapterName);
  const maybeChapter = chapterIndex >= 0 ? chapters[chapterIndex] : undefined;

  if (maybeChapter === undefined) {
    return notFound();
  }

  const chapter = {
    ...maybeChapter,
  };

  const isChapter1 = chapterName === "Ĉapitro 1";
  const previousChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;

  const breadcrumbItems: BreadCrumbItem[] = [
    { label: "Home", href: "/" },
    { label: testamentName, href: `/${testamentSlug}` },
    { label: bookName, href: `/${testamentSlug}/${bookSlug}` },
    { label: chapterName, href: `/${testamentSlug}/${bookSlug}/${chapterSlug}` },
  ];

  return (
    <ReadingLayout
      title={bookName}
      subtitle={subtitle && isChapter1 ? subtitle : undefined}
      summary={summary && isChapter1 ? summary : undefined}
    >
      <section data-br-stack="gutter:size4">
        <BreadCrumbs items={breadcrumbItems} />

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

        <nav aria-label="Chapter navigation" data-br-stack="gutter:size2">
          <div data-br-inline="gutter:size3">
            <Link href={`/${testamentSlug}`}>Back to collection</Link>
            <Link href={`/${testamentSlug}/${bookSlug}`}>Back to book</Link>
          </div>

          <div data-br-inline="gutter:size3">
            {previousChapter ? (
              <Link
                href={`/${testamentSlug}/${bookSlug}/${stringToSlug(previousChapter.chapterTitle)}`}
              >
                Previous: {previousChapter.chapterTitle}
              </Link>
            ) : null}
            {nextChapter ? (
              <Link
                href={`/${testamentSlug}/${bookSlug}/${stringToSlug(nextChapter.chapterTitle)}`}
              >
                Next: {nextChapter.chapterTitle}
              </Link>
            ) : null}
          </div>
        </nav>

        {chapter.footNotes ? (
          <footer data-br-stack="gutter:size2">
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
