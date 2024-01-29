import { chapter1 } from "./chapter1/chapter1";

export const Judas = {
  bookTitle: "Judas",
  bookTitleShort: "Judas",
  subtitle: "",
  summary: "",
  chapters: [chapter1],
} as const satisfies Book;
