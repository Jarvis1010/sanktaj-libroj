import { chapter1 } from "./chapter1/chapter1";
import { chapter2 } from "./chapter2/chapter2";
import { chapter3 } from "./chapter3/chapter3";
import { chapter4 } from "./chapter4/chapter4";

export const duTimoteo = {
  bookTitle: "2 Timoteo",
  bookTitleShort: "2 Timoteo",
  chapters: [chapter1, chapter2, chapter3, chapter4],
} as const satisfies Book;
