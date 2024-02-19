import { comeThouFont } from "./comeThouFont";
import { forTheBeauty } from "./forTheBeauty";
import { howGreatThouArt } from "./howGreatThouArt";
import { thereIsAGreen } from "./thereIsAGreen";
import { nearerMyGod } from "./nearerMyGod";
import { aMightyFortress } from "./aMightyFortress";

export const himnoj = {
  bookTitle: "Himnoj",
  bookTitleShort: "Himnoj",
  chapters: [
    comeThouFont,
    forTheBeauty,
    howGreatThouArt,
    thereIsAGreen,
    nearerMyGod,
    aMightyFortress,
  ],
} as const satisfies Book;
