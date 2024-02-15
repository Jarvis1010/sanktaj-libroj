import { chapter1 } from "./chapter1";
import { chapter2 } from "./chapter2";
import { chapter3 } from "./chapter3";
import { chapter4 } from "./chapter4";
import { chapter5 } from "./chapter5";
import { chapter9 } from "./chapter9";
import { chapter29 } from "./chapter29";
import { chapter31 } from "./chapter31";
import { chapter32 } from "./chapter32";
import { chapter33 } from "./chapter33";

export const duNifai = {
  bookTitle: "La Dua Libro De Nifai",
  bookTitleShort: "2 Nifai",
  chapters: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter9,
    chapter29,
    chapter31,
    chapter32,
    chapter33,
  ],
} as const satisfies Book;
