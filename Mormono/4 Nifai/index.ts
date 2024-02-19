import { chapter1 } from "./chapter1";

export const kvarNifai = {
  bookTitle: "La Kvara Libro De Nifai",
  bookTitleShort: "4 Nifai",
  subtitle:
    "La Libro de Nifai, kiu estis la filo de Nifai --- Unu El La Disĉiploj de Jesuo Kristo",
  chapters: [chapter1],
} as const satisfies Book;
