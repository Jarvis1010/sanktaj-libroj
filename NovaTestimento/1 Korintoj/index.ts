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
import { chapter11 } from "./chapter11/chapter11";
import { chapter12 } from "./chapter12/chapter12";
import { chapter13 } from "./chapter13/chapter13";
import { chapter14 } from "./chapter14/chapter14";
import { chapter15 } from "./chapter15/chapter15";
import { chapter16 } from "./chapter16/chapter16";

export const unuKorintoj = {
  bookTitle: "1 Korintoj",
  bookTitleShort: "1 Korintoj",
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
    chapter11,
    chapter12,
    chapter13,
    chapter14,
    chapter15,
    chapter16,
  ],
} as const satisfies Book;
