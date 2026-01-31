import Link from "next/link";
import styles from "./page.module.css";

export default function About() {
  return (
    <main data-br-stack="gutter:size7">
      <header className={styles.header}>
        <h1>About this Project</h1>
        <p className={styles.lead}>
          A digital collection of Latter-day Saint scriptures in Esperanto
        </p>
      </header>

      <div className={styles.content}>
        <p>
          This project provides a digital version of the scriptures of the Church of Jesus Christ of
          Latter-day Saints in Esperanto. It is a work in progress and is not officially affiliated
          with the Church.
        </p>

        <p>
          The Book of Mormon text is taken from{" "}
          <a
            href="https://www.churchofjesuschrist.org/study/scriptures/bofm"
            target="_blank"
            rel="noopener noreferrer"
          >
            the official Church publications
          </a>
          . The{" "}
          <a
            href="http://poresperantamormonaro.weebly.com/la-libro-de-mormon.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            selected chapters translation
          </a>{" "}
          serves as the primary source.
        </p>

        <p>
          The Bible text comes from the GitHub repository of{" "}
          <a
            href="https://github.com/thiagobodruk/bible/blob/master/json/eo_esperanto.json"
            target="_blank"
            rel="noopener noreferrer"
          >
            thiagobodruk
          </a>
          . Modifications were made to convert from the x-system to proper Esperanto alphabet. While
          accuracy has been prioritized, the text should be verified for critical use.
        </p>

        <p>
          Hymn texts are sourced from the archived Christian hymns website at{" "}
          <a
            href="https://www.oocities.org/cigneto/thcind/hymn-en.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.oocities.org/cigneto/
          </a>
          .
        </p>

        <p>
          Built with Next.js and hosted on Vercel, the scriptures are stored as JSON files and
          rendered as HTML. An API is in development to enable programmatic access—explore the
          experimental version on the <Link href="/api">API page</Link>.
        </p>

        <section className={styles.section}>
          <h2>Future Goals</h2>
          <p>Planned improvements for this project:</p>
          <ul className={styles.goalsList}>
            <li>Internationalize non-scripture pages</li>
            <li>Stabilize and enhance the API</li>
            <li>Continue refining design and user experience</li>
            <li>Complete remaining scripture translations</li>
            <li>Improve existing translation quality</li>
            <li>Expand hymn translation collection</li>
          </ul>

          <div className={styles.contribute}>
            <p>
              This project is open source on{" "}
              <a
                href="https://github.com/Jarvis1010/sanktaj-libroj"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              . Contributions, suggestions, and feedback are welcome and appreciated.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
