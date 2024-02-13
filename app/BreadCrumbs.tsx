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
    <nav
      data-bedrock-inline="gutter:size3"
      style={{ padding: "var(--size-4) var(--size-6)" }}
    >
      <Link href="/">Home</Link>

      {pathNames.map((path, index) => {
        const href = "/" + pathNames.slice(0, index + 1).join("/");
        return (
          <>
            <span> | </span>
            <Link key={path} href={href}>
              {path}
            </Link>
          </>
        );
      })}
    </nav>
  );
}
