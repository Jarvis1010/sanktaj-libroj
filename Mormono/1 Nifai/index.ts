import { chapter1 } from "./chapter1";

export const unuNifai = {
  bookTitle: "La Unua Libro De Nifai",
  bookTitleShort: "1 Nifai",
  subtitle: "Lia regado kaj lia servado",
  summary: "",
  chapters: [chapter1],
} as const satisfies Book;
