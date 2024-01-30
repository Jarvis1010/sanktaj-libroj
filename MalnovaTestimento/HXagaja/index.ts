import { chapter1 } from "./chapter1/chapter1";
import { chapter2 } from "./chapter2/chapter2";

export const HXagaja = {
  bookTitle: "ĥagaja",
  bookTitleShort: "ĥagaja",
  subtitle: "",
  summary: "",
  chapters: [chapter1, chapter2],
} as const satisfies Book;
