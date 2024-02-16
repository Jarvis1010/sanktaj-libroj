import { chapter1 } from "./chapter1";
import { chapter8 } from "./chapter8";
import { chapter11 } from "./chapter11";
import { chapter12 } from "./chapter12";
import { chapter13 } from "./chapter13";
import { chapter14 } from "./chapter14";
import { chapter15 } from "./chapter15";
import { chapter16 } from "./chapter16";
import { chapter17 } from "./chapter17";
import { chapter18 } from "./chapter18";
import { chapter19 } from "./chapter19";
import { chapter20 } from "./chapter20";
import { chapter21 } from "./chapter21";
import { chapter22 } from "./chapter22";
import { chapter23 } from "./chapter23";
import { chapter24 } from "./chapter24";
import { chapter25 } from "./chapter25";
import { chapter26 } from "./chapter26";
import { chapter27 } from "./chapter27";
import { chapter28 } from "./chapter28";
import { chapter29 } from "./chapter29";
import { chapter30 } from "./chapter30";

export const triNifai = {
  bookTitle: "La Tria Libro De Nifai",
  bookTitleShort: "3 Nifai",
  subtitle: "La filo de Nifai, kiu estis la filo de Helaman",
  chapters: [
    chapter1,
    chapter8,
    chapter11,
    chapter12,
    chapter13,
    chapter14,
    chapter15,
    chapter16,
    chapter17,
    chapter18,
    chapter19,
    chapter20,
    chapter21,
    chapter22,
    chapter23,
    chapter24,
    chapter25,
    chapter26,
    chapter27,
    chapter28,
    chapter29,
    chapter30,
  ],
} as const satisfies Book;
