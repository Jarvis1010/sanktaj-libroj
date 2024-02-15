import { comeThouFont } from "./comeThouFont";
import { forTheBeauty } from "./forTheBeauty";
import { howGreatThouArt } from "./howGreatThouArt";
import { thereIsAGreen } from "./thereIsAGreen";
import { nearerMyGod } from "./nearerMyGod";

export const himnoj = {
  bookTitle: "Himnoj",
  bookTitleShort: "Himnoj",
  chapters: [
    comeThouFont,
    forTheBeauty,
    howGreatThouArt,
    thereIsAGreen,
    nearerMyGod,
  ],
} as const satisfies Book;
