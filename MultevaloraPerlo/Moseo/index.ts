import { chapter1 } from "./chapter1";
import { chapter2 } from "./chapter2";
import { chapter3 } from "./chapter3";
import { chapter4 } from "./chapter4";
import { chapter5 } from "./chapter5";

export const moseo = {
  bookTitle: "La Libro De Moseo",
  bookTitleShort: "Moseo",
  subtitle: "Vizioj de Moseo",
  chapters: [chapter1, chapter2, chapter3, chapter4, chapter5],
} as const satisfies Book;
