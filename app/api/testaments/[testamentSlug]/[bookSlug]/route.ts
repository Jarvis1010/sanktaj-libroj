import { slugToString, stringToSlug } from "@/routeutils";

import { testamentMap } from "@/testaments";

export async function GET(
  request: Request,
  { params }: { params: { testamentSlug: string; bookSlug: string } },
) {
  const { testamentSlug, bookSlug } = params;

  const testamentName = slugToString(testamentSlug);
  const bookName = slugToString(bookSlug);

  const maybeTestament =
    testamentName in testamentMap
      ? testamentMap[testamentName as keyof typeof testamentMap]
      : undefined;

  if (maybeTestament === undefined) {
    return new Response(`Testament not found: ${testamentSlug}`, {
      status: 400,
    });
  }

  const maybeBook = maybeTestament.books.find(
    (book) => book.bookTitle === bookName,
  );

  if (maybeBook === undefined) {
    return new Response(`Book not found: ${bookSlug}`, {
      status: 400,
    });
  }

  const book = {
    ...maybeBook,
    chapters: maybeBook.chapters.map((chapter) => ({
      chapterTitle: chapter.chapterTitle,
      chapterSlug: stringToSlug(chapter.chapterTitle),
    })),
  };

  return Response.json(book);
}
