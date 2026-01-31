import { testamentSlugMap, testamentTitles } from "@/testaments";
import ContinueReading from "@/app/components/ContinueReading";

import { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

const testamentImageMap: Record<(typeof testamentTitles)[number], string> = {
  "Malnova Testamento":
    "https://www.churchofjesuschrist.org/imgs/6de4c15152c1c0e56b9ac5004e62d80cd04ad02d/full/200%2C/0/default",
  "Nova Testamento":
    "https://www.churchofjesuschrist.org/imgs/7d175abca40ddfa795593e4f713a44489acc6cd5/full/200%2C/0/default",
  "La Libro De Mormon":
    "https://www.churchofjesuschrist.org/imgs/a0a9b700fbd9bdd58c245a164d9cdbcdc8b31c8d/full/200%2C/0/default",
  Muziko: "https://www.churchofjesuschrist.org/music/bc/music/hymn-lg.jpg",
  "La Multevalora Perlo":
    "https://www.churchofjesuschrist.org/imgs/16cf3d24af3de0ca15a4f6d7de71a8e870616fb9/full/200%2C/0/default",
};

export default function Home() {
  return (
    <main data-br-stack="gutter:size7">
      <h1>Collections</h1>
      <ContinueReading />
      <Link href="/about">About this Project</Link>
      <nav aria-label="Collections">
        <ul
          className="testament-grid"
          data-br-grid="gutter:size3"
          style={{ "--minItemWidth": "var(--size-11)" } as CSSProperties}
        >
          {testamentTitles.map((title) => {
            return (
              <li key={title}>
                <Link
                  data-br-frame
                  style={{ "--ratio": "var(--ratio-portrait)" } as CSSProperties}
                  href={`/${testamentSlugMap[title]}`}
                >
                  <Image src={testamentImageMap[title]} alt={title} width={200} height={200} />
                </Link>
                <span data-br-center="center-text center-children">{title}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}
