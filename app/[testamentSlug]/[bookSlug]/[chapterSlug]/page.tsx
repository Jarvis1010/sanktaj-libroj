import { slugToString, stringToSlug } from "@/routeutils";

import Link from "next/link";
import { notFound } from "next/navigation";
import { testamentMap, testamentSlugMap, testamentTitles } from "@/testaments";
import ReadingLayout from "@/app/components/ReadingLayout";
import ReadingTools from "@/app/components/ReadingTools";
import BreadCrumbs, { BreadCrumbItem } from "@/app/BreadCrumbs";
import ChapterNavigation from "@/app/components/ChapterNavigation";
import styles from "./page.module.css";

export function generateStaticParams() {
  return testamentTitles.flatMap((title) => {
    const testament = testamentMap[title];
    const testamentSlug = testamentSlugMap[title];

    return testament.books.flatMap((book) => {
      const bookSlug = stringToSlug(book.bookTitle);
      return book.chapters.map((chapter) => ({
        testamentSlug,
        bookSlug,
        chapterSlug: stringToSlug(chapter.chapterTitle),
      }));
    });
  });
}

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
        <div className={styles.navigationHeader}>
          <div className={styles.topRow}>
            <BreadCrumbs items={breadcrumbItems} />
            <div className={styles.backLinks}>
              <Link href={`/${testamentSlug}`} className={styles.backLink}>
                Collection
              </Link>
              <Link href={`/${testamentSlug}/${bookSlug}`} className={styles.backLink}>
                Book
              </Link>
            </div>
          </div>
        </div>

        <h2>{chapterName}</h2>

        {chapter.chapterSubtitle ? (
          <p className="pericope-title">{chapter.chapterSubtitle}</p>
        ) : null}

        {chapter.summary ? <p className="reading-summary">{chapter.summary}</p> : null}

        <ReadingTools
          verseCount={chapter.verses.length}
          testamentSlug={testamentSlug}
          bookSlug={bookSlug}
          chapterSlug={chapterSlug}
          testamentTitle={testamentName}
          bookTitle={bookName}
          chapterTitle={chapterName}
        />

        <div data-br-stack="gutter:size3">
          {chapter.verses.map((verse, i) => {
            return (
              <p key={verse} id={`verse-${i + 1}`}>
                <a href={`#verse-${i + 1}`} className="verse-number" aria-label={`Verse ${i + 1}`}>
                  {i + 1}
                </a>
                {verse}
              </p>
            );
          })}
        </div>

        {chapter.footNotes ? (
          <footer data-br-stack="gutter:size2">
            {chapter.footNotes.map((footNote) => (
              <p key={footNote}>
                <em>{footNote}</em>
              </p>
            ))}
          </footer>
        ) : null}

        <ChapterNavigation
          previousChapter={
            previousChapter
              ? {
                  title: previousChapter.chapterTitle,
                  href: `/${testamentSlug}/${bookSlug}/${stringToSlug(previousChapter.chapterTitle)}`,
                }
              : null
          }
          nextChapter={
            nextChapter
              ? {
                  title: nextChapter.chapterTitle,
                  href: `/${testamentSlug}/${bookSlug}/${stringToSlug(nextChapter.chapterTitle)}`,
                }
              : null
          }
        />
      </section>
    </ReadingLayout>
  );
}
