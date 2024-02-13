import { chapter2 } from "./chapter2";
import { chapter3 } from "./chapter3";
import { chapter4 } from "./chapter4";
import { chapter5 } from "./chapter5";
import { chapter17 } from "./chapter17";
import { chapter18 } from "./chapter18";

export const mozaja = {
  bookTitle: "La Libro De Mozaja",
  bookTitleShort: "Mozaja",
  subtitle: "",
  summary: "",
  chapters: [chapter2, chapter3, chapter4, chapter5, chapter17, chapter18],
} as const satisfies Book;
