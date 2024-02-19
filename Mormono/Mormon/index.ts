import { chapter1 } from "./chapter1";
import { chapter4 } from "./chapter4";
import { chapter6 } from "./chapter6";
import { chapter7 } from "./chapter7";
import { chapter8 } from "./chapter8";
import { chapter9 } from "./chapter9";

export const mormon = {
  bookTitle: "La Libro De Mormon",
  bookTitleShort: "Mormon",
  chapters: [chapter1, chapter4, chapter6, chapter7, chapter8, chapter9],
} as const satisfies Book;
