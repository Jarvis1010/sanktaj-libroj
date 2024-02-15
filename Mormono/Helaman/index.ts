import { chapter13 } from "./chapter13";
import { chapter14 } from "./chapter14";
import { chapter15 } from "./chapter15";
import { chapter16 } from "./chapter16";

export const helaman = {
  bookTitle: "La Libro De Helaman",
  bookTitleShort: "Helaman",
  chapters: [chapter13, chapter14, chapter15, chapter16],
} as const satisfies Book;
