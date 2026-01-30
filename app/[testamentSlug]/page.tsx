import { slugToString, stringToSlug } from "@/routeutils";

import Link from "next/link";
import { notFound } from "next/navigation";
import { testamentMap } from "@/testaments";

export default function Testament({
  params,
}: {
  params: { testamentSlug: string };
}) {
  const { testamentSlug } = params;

  const testamentName = slugToString(testamentSlug);

  const maybeTestament =
    testamentName in testamentMap
      ? testamentMap[testamentName as keyof typeof testamentMap]
      : undefined;

  if (maybeTestament === undefined) {
    return notFound();
  }

  return (
    <main>
      <h1>{testamentName}</h1>
      <ul data-br-stack="gutter:size3">
        {maybeTestament.books.map((book) => {
          return (
            <li key={book.bookTitleShort}>
              <Link href={`${testamentSlug}/${stringToSlug(book.bookTitle)}`}>
                {book.bookTitleShort}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
