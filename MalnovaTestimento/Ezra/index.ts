import { chapter1 } from "./chapter1/chapter1";
import { chapter2 } from "./chapter2/chapter2";
import { chapter3 } from "./chapter3/chapter3";
import { chapter4 } from "./chapter4/chapter4";
import { chapter5 } from "./chapter5/chapter5";
import { chapter6 } from "./chapter6/chapter6";
import { chapter7 } from "./chapter7/chapter7";
import { chapter8 } from "./chapter8/chapter8";
import { chapter9 } from "./chapter9/chapter9";
import { chapter10 } from "./chapter10/chapter10";

export const Ezra = {
  bookTitle: "Ezra",
  bookTitleShort: "Ezra",
  subtitle: "",
  summary: "",
  chapters: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter8,
    chapter9,
    chapter10,
  ],
} as const satisfies Book;
