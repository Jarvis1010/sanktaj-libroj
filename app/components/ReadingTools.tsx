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

type ReadingSettings = {
  fontSize: "size-0" | "size-1" | "size-2";
  lineHeight: "line-height-default" | "line-height-relaxed" | "line-height-loose";
  theme: "system" | "light" | "dark";
};

const SETTINGS_STORAGE_KEY = "sanktaj-libroj-reading-settings";
const LAST_READING_KEY = "sanktaj-libroj-last-reading";

const defaultSettings: ReadingSettings = {
  fontSize: "size-0",
  lineHeight: "line-height-relaxed",
  theme: "system",
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
  const [settings, setSettings] = useState<ReadingSettings>(defaultSettings);

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
    localStorage.setItem(LAST_READING_KEY, JSON.stringify(lastReading));
  }, [testamentSlug, bookSlug, chapterSlug, testamentTitle, bookTitle, chapterTitle]);

  useEffect(() => {
    const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as ReadingSettings;
      setSettings({ ...defaultSettings, ...parsed });
    } catch {
      setSettings(defaultSettings);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--reading-font-size",
      `var(--${settings.fontSize})`
    );
    document.documentElement.style.setProperty(
      "--reading-line-height",
      `var(--${settings.lineHeight})`
    );

    if (settings.theme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", settings.theme);
    }

    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

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
      <div className="reading-tools-row" data-br-inline="gutter:size3">
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
      </div>

      <div className="reading-settings" data-br-stack="gutter:size3">
        <h3>Reading settings</h3>
        <div className="reading-settings-grid" data-br-split="gap:size3 minItemWidth:size9">
          <label data-br-stack="gutter:size2">
            Font size
            <select
              value={settings.fontSize}
              onChange={(event) =>
                setSettings((prev) => ({
                  ...prev,
                  fontSize: event.target.value as ReadingSettings["fontSize"],
                }))
              }
            >
              <option value="size-0">Default</option>
              <option value="size-1">Large</option>
              <option value="size-2">Extra large</option>
            </select>
          </label>

          <label data-br-stack="gutter:size2">
            Line height
            <select
              value={settings.lineHeight}
              onChange={(event) =>
                setSettings((prev) => ({
                  ...prev,
                  lineHeight: event.target.value as ReadingSettings["lineHeight"],
                }))
              }
            >
              <option value="line-height-default">Default</option>
              <option value="line-height-relaxed">Relaxed</option>
              <option value="line-height-loose">Loose</option>
            </select>
          </label>

          <label data-br-stack="gutter:size2">
            Theme
            <select
              value={settings.theme}
              onChange={(event) =>
                setSettings((prev) => ({
                  ...prev,
                  theme: event.target.value as ReadingSettings["theme"],
                }))
              }
            >
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}
