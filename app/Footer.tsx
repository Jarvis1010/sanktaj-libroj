import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div
        className="app-footer-content"
        data-br-center
        data-br-grid="gutter:size5 minItemWidth:200px"
      >
        <section className="footer-section" data-br-stack="gutter:size2">
          <h3>About</h3>
          <p>Sanktaj Libroj is a free, open-source digital library of sacred texts in Esperanto.</p>
          <div>
            <Link href="/about">Learn more</Link>
          </div>
        </section>

        <section className="footer-section" data-br-stack="gutter:size2">
          <h3>Collections</h3>
          <ul data-br-stack="gutter:size1">
            <li>
              <Link href="/malnovatestimento">Malnova Testamento</Link>
            </li>
            <li>
              <Link href="/novatestimento">Nova Testamento</Link>
            </li>
            <li>
              <Link href="/la-libro-de-mormon">La Libro de Mormon</Link>
            </li>
            <li>
              <Link href="/la-multevalora-perlo">La Multevalora Perlo</Link>
            </li>
          </ul>
        </section>

        <section className="footer-section" data-br-stack="gutter:size2">
          <h3>Resources</h3>
          <ul data-br-stack="gutter:size1">
            <li>
              <a href="https://github.com/Jarvis1010/sanktaj-libroj">GitHub</a>
            </li>
            <li>
              <Link href="/about">Credits</Link>
            </li>
          </ul>
        </section>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sanktaj Libroj. Open source under the MIT License.</p>
      </div>
    </footer>
  );
}
