import { testamentSlugMap, testamentTitles } from "@/testaments";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <ul data-bedrock-stack="gutter:size3">
        {testamentTitles.map((title) => {
          return (
            <li key={title}>
              <Link href={`/${testamentSlugMap[title]}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
