import { slugToString, stringToSlug } from "@/routeutils";

import { testamentMap } from "@/testaments";

export async function GET(request: Request, { params }: { params: { testamentSlug: string } }) {
  const { testamentSlug } = params;

  const testamentName = slugToString(testamentSlug);

  const maybeTestament =
    testamentName in testamentMap
      ? testamentMap[testamentName as keyof typeof testamentMap]
      : undefined;

  if (maybeTestament === undefined) {
    return new Response(`Testament not found: ${testamentSlug}`, {
      status: 400,
    });
  }

  const testament = {
    ...maybeTestament,
    books: maybeTestament.books.map((book) => ({
      bookSlug: stringToSlug(book.bookTitle),
      bookTitle: book.bookTitle,
      bookTitleShort: book.bookTitleShort,
    })),
  };

  return Response.json(testament);
}
