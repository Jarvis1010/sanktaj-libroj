import { chapter1 } from "./chapter1/chapter1";

export const Filemon = {
  bookTitle: "Filemon",
  bookTitleShort: "Filemon",
  chapters: [chapter1],
} as const satisfies Book;
