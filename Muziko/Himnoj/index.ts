import { laPlenumo } from "./laPlenumo";
import { abideWithMeTisEventide } from "./abideWithMeTisEventide";
import { comeThouFont } from "./comeThouFont";
import { forTheBeauty } from "./forTheBeauty";
import { howGreatThouArt } from "./howGreatThouArt";
import { thereIsAGreen } from "./thereIsAGreen";
import { nearerMyGod } from "./nearerMyGod";
import { aMightyFortress } from "./aMightyFortress";
import { farFarAway } from "./farFarAway";
import { awayInTheManger } from "./awayInTheManger";
import { harkTheHerald } from "./harkTheHerald";

export const himnoj = {
  bookTitle: "Himnoj",
  bookTitleShort: "Himnoj",
  chapters: [
    laPlenumo,
    abideWithMeTisEventide,
    comeThouFont,
    forTheBeauty,
    howGreatThouArt,
    thereIsAGreen,
    nearerMyGod,
    aMightyFortress,
    farFarAway,
    awayInTheManger,
    harkTheHerald,
  ],
} as const satisfies Book;
