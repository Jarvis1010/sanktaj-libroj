import { chapter1 } from "./chapter1";
import { chapter2 } from "./chapter2";
import { chapter3 } from "./chapter3";
import { chapter4 } from "./chapter4";
import { chapter5 } from "./chapter5";
import { chapter6 } from "./chapter6";
import { chapter7 } from "./chapter7";
import { chapter16 } from "./chapter16";
import { chapter17 } from "./chapter17";
import { chapter18 } from "./chapter18";

export const unuNifai = {
  bookTitle: "La Unua Libro De Nifai",
  bookTitleShort: "1 Nifai",
  subtitle: "Lia regado kaj lia servado",
  chapters: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter16,
    chapter17,
    chapter18,
  ],
} as const satisfies Book;
