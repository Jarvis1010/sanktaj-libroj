import { chapter1 } from "./chapter1";

export const moseo = {
  bookTitle: "La Libro De Moseo",
  bookTitleShort: "Moseo",
  subtitle: "Vizioj de Moseo",
  chapters: [chapter1],
} as const satisfies Book;
