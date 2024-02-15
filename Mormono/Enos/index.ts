import { chapter1 } from "./chapter1";

export const enos = {
  bookTitle: "La Libro De Enos",
  bookTitleShort: "Enos",
  chapters: [chapter1],
} as const satisfies Book;
