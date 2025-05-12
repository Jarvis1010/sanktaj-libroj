import Link from "next/link";

export default function API() {
  return (
    <main data-bedrock-stack="gutter:size7">
      <header>
        <h1>Scripture API</h1>
      </header>
      <p>
        The API is currently in development and is not considered stable, but
        you play around with it.
      </p>
      <p>
        The starting point is at{" "}
        <Link href="/api/testaments">/api/testaments</Link>. This will give you
        the list of testaments. From there you can get the books, chapters, and
        verses.
      </p>
    </main>
  );
}
