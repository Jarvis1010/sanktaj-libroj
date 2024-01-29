import { slugToString, stringToSlug } from "@/routeutils";

import { testamentMap } from "@/testaments";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { testamentSlug: string; bookSlug: string; chapterSlug: string };
  },
) {
  const { testamentSlug, bookSlug, chapterSlug } = params;

  const testamentName = slugToString(testamentSlug);
  const bookName = slugToString(bookSlug);
  const chapterName = slugToString(chapterSlug);

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

  const maybeChapter = maybeBook?.chapters.find(
    (chapter) => chapter.chapterTitle === chapterName,
  );

  if (maybeChapter === undefined) {
    return new Response(`Chapter not found: ${chapterSlug}`, {
      status: 400,
    });
  }

  const chapter = {
    ...maybeChapter,
  };

  return Response.json(chapter);
}
