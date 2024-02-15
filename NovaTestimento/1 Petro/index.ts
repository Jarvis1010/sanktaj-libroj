import { chapter1 } from "./chapter1/chapter1";
import { chapter2 } from "./chapter2/chapter2";
import { chapter3 } from "./chapter3/chapter3";
import { chapter4 } from "./chapter4/chapter4";
import { chapter5 } from "./chapter5/chapter5";

export const unuPetro = {
  bookTitle: "1 Petro",
  bookTitleShort: "1 Petro",
  chapters: [chapter1, chapter2, chapter3, chapter4, chapter5],
} as const satisfies Book;
