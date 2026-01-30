import Link from "next/link";
import ReadingSettingsToggle from "./ReadingSettingsToggle";
import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header-content" data-br-center>
        <div className="app-header-left">
          <Link href="/" className="app-logo">
            Sanktaj Libroj
          </Link>
        </div>

        <nav className="app-header-nav" data-br-inline="gutter:size4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="app-header-right">
          <ReadingSettingsToggle />
          <Link href="/search" className="search-button" aria-label="Search verses">
            🔍
          </Link>
        </div>
      </div>
    </header>
  );
}
