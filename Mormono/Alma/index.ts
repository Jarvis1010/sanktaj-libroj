import { chapter5 } from "./chapter5";
import { chapter11 } from "./chapter11";
import { chapter12 } from "./chapter12";
import { chapter32 } from "./chapter32";
import { chapter34 } from "./chapter34";
import { chapter39 } from "./chapter39";
import { chapter40 } from "./chapter40";
import { chapter41 } from "./chapter41";
import { chapter42 } from "./chapter42";

export const alma = {
  bookTitle: "La Libro De Alma",
  bookTitleShort: "Alma",
  subtitle: "La Filo de Alma",
  chapters: [
    chapter5,
    chapter11,
    chapter12,
    chapter32,
    chapter34,
    chapter39,
    chapter40,
    chapter41,
    chapter42,
  ],
} as const satisfies Book;
