import { chapter1 } from "./chapter1/chapter1";

export const Obadja = {
  bookTitle: "Obadja",
  bookTitleShort: "Obadja",
  subtitle: "",
  summary: "",
  chapters: [chapter1],
} as const satisfies Book;
