import { chapter1 } from "./chapter1/chapter1";

export const duJohano = {
  bookTitle: "2 Johano",
  bookTitleShort: "2 Johano",
  subtitle: "",
  summary: "",
  chapters: [chapter1],
} as const satisfies Book;
