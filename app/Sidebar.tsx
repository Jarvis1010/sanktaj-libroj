"use client";

import { useState } from "react";
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

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        ☰
      </button>

      {/* Sidebar overlay (mobile) */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar} />
      )}

      {/* Sidebar */}
      <nav
        className={`app-sidebar ${isOpen ? "is-open" : ""}`}
        aria-label="Testament collections"
      >
        <div className="sidebar-header">
          <h2>Collections</h2>
          <button
            className="sidebar-close"
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
                <Link
                  href={`/${slug}`}
                  className="sidebar-link"
                  onClick={closeSidebar}
                >
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
