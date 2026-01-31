import { CSSProperties, ReactNode } from "react";
import "./AppShell.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface AppShellProps {
  children: ReactNode;
}

/**
 * AppShell component provides the main layout structure for the application.
 * Uses Bedrock Layout primitives for semantic, responsive layout.
 *
 * Structure:
 * - Header (fixed, full-width)
 * - Container:
 *   - Sidebar (toggle-able, left side navigation)
 *   - Main (primary content area)
 * - Footer (full-width)
 */
export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      {/* Skip to content link for keyboard navigation */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Header */}
      <Header />

      {/* Main container with sidebar and content */}
      <div className="app-shell-container">
        <Sidebar />

        {/* Main content area */}
        <main
          id="main-content"
          className="app-shell-main"
          data-br-stack="gutter:size5"
          data-br-center
          style={{ "--maxWidth": "var(--size-content-3)" } as CSSProperties}
        >
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
