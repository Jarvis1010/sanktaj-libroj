import { chapter1 } from "./chapter1/chapter1";
import { chapter2 } from "./chapter2/chapter2";
import { chapter3 } from "./chapter3/chapter3";

export const Joel = {
  bookTitle: "Joel",
  bookTitleShort: "Joel",
  subtitle: "",
  summary: "",
  chapters: [chapter1, chapter2, chapter3],
} as const satisfies Book;
