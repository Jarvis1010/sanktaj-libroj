"use client";

import Link from "next/link";
import styles from "./ChapterNavigation.module.css";

interface ChapterNavigationProps {
  previousChapter?: {
    title: string;
    href: string;
  } | null;
  nextChapter?: {
    title: string;
    href: string;
  } | null;
}

export default function ChapterNavigation({
  previousChapter,
  nextChapter,
}: ChapterNavigationProps) {
  if (!previousChapter && !nextChapter) {
    return null;
  }

  return (
    <nav aria-label="Chapter navigation" className={styles.nav}>
      <div className={styles.links}>
        {previousChapter ? (
          <Link href={previousChapter.href} className={styles.prev}>
            <span className={styles.arrow}>←</span>
            <span className={styles.linkContent}>
              <span className={styles.label}>Previous</span>
              <span className={styles.title}>{previousChapter.title}</span>
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link href={nextChapter.href} className={styles.next}>
            <span className={styles.linkContent}>
              <span className={styles.label}>Next</span>
              <span className={styles.title}>{nextChapter.title}</span>
            </span>
            <span className={styles.arrow}>→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
