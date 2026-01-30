"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LAST_READING_KEY = "sanktaj-libroj-last-reading";

type LastReading = {
  testamentSlug: string;
  bookSlug: string;
  chapterSlug: string;
  testamentTitle: string;
  bookTitle: string;
  chapterTitle: string;
};

export default function ContinueReading() {
  const [lastReading, setLastReading] = useState<LastReading | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(LAST_READING_KEY);
    if (!stored) return;
    try {
      setLastReading(JSON.parse(stored) as LastReading);
    } catch {
      setLastReading(null);
    }
  }, []);

  if (!lastReading) return null;

  return (
    <section data-br-stack="gutter:size2">
      <h2>Continue reading</h2>
      <p>
        {lastReading.testamentTitle} → {lastReading.bookTitle} → {lastReading.chapterTitle}
      </p>
      <Link
        href={`/${lastReading.testamentSlug}/${lastReading.bookSlug}/${lastReading.chapterSlug}`}
      >
        Resume chapter
      </Link>
    </section>
  );
}
