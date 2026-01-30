import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer-content" data-bedrock-center>
        <div className="footer-section">
          <h3>About</h3>
          <p>
            Sanktaj Libroj is a free, open-source digital library of sacred
            texts in Esperanto.
          </p>
          <Link href="/about">Learn more</Link>
        </div>

        <div className="footer-section">
          <h3>Collections</h3>
          <ul>
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
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="https://github.com/Jarvis1010/sanktaj-libroj">
                GitHub
              </a>
            </li>
            <li>
              <Link href="/about">Credits</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2024 Sanktaj Libroj. Open source under the MIT License.
        </p>
      </div>
    </footer>
  );
}
