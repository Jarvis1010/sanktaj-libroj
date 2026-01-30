"use client";

import { useEffect, useState } from "react";
import "./ReadingSettingsToggle.css";

type ReadingSettings = {
  fontSize: "size-0" | "size-1" | "size-2";
  lineHeight: "line-height-default" | "line-height-relaxed" | "line-height-loose";
  theme: "system" | "light" | "dark";
};

const SETTINGS_STORAGE_KEY = "sanktaj-libroj-reading-settings";

const defaultSettings: ReadingSettings = {
  fontSize: "size-0",
  lineHeight: "line-height-relaxed",
  theme: "system",
};

export default function ReadingSettingsToggle() {
  const [settings, setSettings] = useState<ReadingSettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!stored) {
      setSettings(defaultSettings);
      setMounted(true);
      return;
    }
    try {
      const parsed = JSON.parse(stored) as ReadingSettings;
      setSettings({ ...defaultSettings, ...parsed });
    } catch {
      setSettings(defaultSettings);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fontSizeMap: Record<string, string> = {
      "size-0": "var(--font-size-0)",
      "size-1": "var(--font-size-1)",
      "size-2": "var(--font-size-2)",
    };

    const lineHeightMap: Record<string, string> = {
      "line-height-default": "var(--line-height-default)",
      "line-height-relaxed": "var(--line-height-relaxed)",
      "line-height-loose": "var(--line-height-loose)",
    };

    document.documentElement.style.setProperty(
      "--reading-font-size",
      fontSizeMap[settings.fontSize] || "var(--font-size-0)"
    );
    document.documentElement.style.setProperty(
      "--reading-line-height",
      lineHeightMap[settings.lineHeight] || "var(--line-height-relaxed)"
    );

    if (settings.theme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", settings.theme);
    }

    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  }, [settings, mounted]);

  if (!mounted) return null;

  return (
    <div className="reading-settings-toggle">
      <button
        className="settings-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Reading settings"
        aria-expanded={isOpen}
      >
        ⚙️
      </button>

      {isOpen && (
        <div className="settings-menu">
          <div className="settings-group">
            <label>Font size</label>
            <div className="settings-options">
              <button
                className={`option-button ${settings.fontSize === "size-0" ? "active" : ""}`}
                onClick={() => setSettings((prev) => ({ ...prev, fontSize: "size-0" }))}
              >
                A
              </button>
              <button
                className={`option-button ${settings.fontSize === "size-1" ? "active" : ""}`}
                onClick={() => setSettings((prev) => ({ ...prev, fontSize: "size-1" }))}
              >
                <strong>A</strong>
              </button>
              <button
                className={`option-button ${settings.fontSize === "size-2" ? "active" : ""}`}
                onClick={() => setSettings((prev) => ({ ...prev, fontSize: "size-2" }))}
              >
                <strong style={{ fontSize: "1.2em" }}>A</strong>
              </button>
            </div>
          </div>

          <div className="settings-group">
            <label>Line height</label>
            <div className="settings-options">
              <button
                className={`option-button ${
                  settings.lineHeight === "line-height-default" ? "active" : ""
                }`}
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    lineHeight: "line-height-default",
                  }))
                }
              >
                Tight
              </button>
              <button
                className={`option-button ${
                  settings.lineHeight === "line-height-relaxed" ? "active" : ""
                }`}
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    lineHeight: "line-height-relaxed",
                  }))
                }
              >
                Relaxed
              </button>
              <button
                className={`option-button ${
                  settings.lineHeight === "line-height-loose" ? "active" : ""
                }`}
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    lineHeight: "line-height-loose",
                  }))
                }
              >
                Loose
              </button>
            </div>
          </div>

          <div className="settings-group">
            <label>Theme</label>
            <div className="settings-options">
              <button
                className={`option-button ${settings.theme === "system" ? "active" : ""}`}
                onClick={() => setSettings((prev) => ({ ...prev, theme: "system" }))}
              >
                System
              </button>
              <button
                className={`option-button ${settings.theme === "light" ? "active" : ""}`}
                onClick={() => setSettings((prev) => ({ ...prev, theme: "light" }))}
              >
                ☀️ Light
              </button>
              <button
                className={`option-button ${settings.theme === "dark" ? "active" : ""}`}
                onClick={() => setSettings((prev) => ({ ...prev, theme: "dark" }))}
              >
                🌙 Dark
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
