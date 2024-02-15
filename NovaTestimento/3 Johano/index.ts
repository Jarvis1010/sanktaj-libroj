import { chapter1 } from "./chapter1/chapter1";

export const triJohano = {
  bookTitle: "3 Johano",
  bookTitleShort: "3 Johano",
  chapters: [chapter1],
} as const satisfies Book;
