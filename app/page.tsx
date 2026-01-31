import { testamentSlugMap, testamentTitles } from "@/testaments";
import ContinueReading from "@/app/components/ContinueReading";

import { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

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
    <main className={styles.home} data-br-stack="gutter:size8">
      <section className={styles.hero} data-br-stack="gutter:size4">
        <p className={styles.kicker}>Digital library</p>
        <h1 className={styles.title}>Sanktaj Libroj</h1>
        <p className={styles.lede}>
          A curated collection of sacred texts in Esperanto, built for focused reading and
          discovery.
        </p>
        <div className={styles.heroActions} data-br-inline="gutter:size3">
          <a className={styles.primaryCta} href="#collections">
            Browse collections
          </a>
          <Link className={styles.secondaryCta} href="/about">
            About this project
          </Link>
        </div>
        <div className={styles.heroMeta} data-br-inline="gutter:size3">
          <span>📖 Five collections</span>
          <span>🔍 Verse-level search</span>
          <span>🕮 Reading tools</span>
        </div>
      </section>

      <section className={styles.section} data-br-stack="gutter:size3">
        <header className={styles.sectionHeader} data-br-stack="gutter:size1">
          <h2>Continue reading</h2>
          <p>Pick up where you last left off.</p>
        </header>
        <ContinueReading />
      </section>

      <section id="collections" className={styles.section} data-br-stack="gutter:size4">
        <header className={styles.sectionHeader} data-br-stack="gutter:size1">
          <h2>Collections</h2>
          <p>Explore a testament or book to begin reading.</p>
        </header>
        <nav aria-label="Collections">
          <ul
            className={styles.testamentGrid}
            data-br-grid="gutter:size3"
            style={{ "--minItemWidth": "var(--size-11)" } as CSSProperties}
          >
            {testamentTitles.map((title) => {
              return (
                <li className={styles.testamentCard} key={title}>
                  <Link
                    className={styles.testamentFrame}
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
      </section>

      <section className={styles.section} data-br-stack="gutter:size2">
        <header className={styles.sectionHeader} data-br-stack="gutter:size1">
          <h2>About & credits</h2>
          <p>Learn more about the project and its sources.</p>
        </header>
        <div className={styles.aboutLinks} data-br-inline="gutter:size3">
          <Link className={styles.secondaryCta} href="/about">
            About the project
          </Link>
          <a className={styles.secondaryCta} href="https://github.com/Jarvis1010/sanktaj-libroj">
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
