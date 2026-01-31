import Link from "next/link";
import styles from "./page.module.css";

export default function API() {
  return (
    <main data-br-stack="gutter:size7">
      <header className={styles.header}>
        <h1>Scripture API</h1>
        <p className={styles.lead}>Programmatic access to scripture data in Esperanto</p>
      </header>

      <div className={styles.content}>
        <div className={styles.warning}>
          <p>
            <strong>⚠️ Experimental:</strong> This API is under active development and may change
            without notice. Not recommended for production use.
          </p>
        </div>

        <p>
          The API provides RESTful access to scripture collections, books, chapters, and verses. All
          data is returned in JSON format.
        </p>

        <p>Start exploring at the testaments endpoint:</p>

        <Link href="/api/testaments" className={styles.apiEndpoint}>
          /api/testaments
        </Link>

        <p>
          From there, navigate through the response structure to access books, chapters, and
          individual verses. Each response includes links to related resources for easy traversal.
        </p>
      </div>
    </main>
  );
}
