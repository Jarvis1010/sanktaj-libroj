"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { testamentTitles, testamentSlugMap } from "@/testaments";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Handle Escape key to close sidebar for keyboard users
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        className="sidebar-toggle"
        type="button"
        onClick={toggleSidebar}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="sidebar-navigation"
      >
        ☰
      </button>

      {/* Sidebar overlay (mobile) */}
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar} aria-hidden="true" />}

      {/* Sidebar */}
      <nav
        id="sidebar-navigation"
        className={`app-sidebar ${isOpen ? "is-open" : ""}`}
        aria-label="Testament collections"
      >
        <div className="sidebar-header">
          <h2>Collections</h2>
          <button
            className="sidebar-close"
            type="button"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="sidebar-list">
          {testamentTitles.map((title) => {
            const slug = testamentSlugMap[title];
            return (
              <li key={title}>
                <Link href={`/${slug}`} className="sidebar-link" onClick={closeSidebar}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
