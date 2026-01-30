import { ReactNode } from "react";
import "./ReadingLayout.css";

interface ReadingLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  summary?: string;
}

/**
 * ReadingLayout component provides an optimized layout for long-form text reading.
 *
 * Features:
 * - Constrained measure (65–80 characters) for optimal readability
 * - Improved spacing between verses and paragraphs
 * - Semantic section/article structure
 * - Open Props typography baseline
 * - Accessible heading hierarchy
 */
export default function ReadingLayout({ children, title, subtitle, summary }: ReadingLayoutProps) {
  return (
    <article className="reading-layout">
      {/* Header with title and metadata */}
      {(title || subtitle || summary) && (
        <header className="reading-header">
          {title && <h1 className="reading-title">{title}</h1>}
          {subtitle && <p className="reading-subtitle">{subtitle}</p>}
          {summary && <p className="reading-summary">{summary}</p>}
        </header>
      )}

      {/* Main reading content */}
      <div className="reading-content">{children}</div>
    </article>
  );
}
