"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {
  const paths = usePathname();
  const pathNames = paths
    .split("/")
    .filter((path) => path)
    .slice(0, -1);

  return (
    <nav data-bedrock-inline="gutter:size3">
      <a href="/">Sanktaj Libroj</a>

      {pathNames.map((path, index) => {
        const href = "/" + pathNames.slice(0, index + 1).join("/");
        return (
          <Link key={path} href={href}>
            {path}
          </Link>
        );
      })}
    </nav>
  );
}
