import { comeThouFont } from "./comeThouFont";
import { forTheBeauty } from "./forTheBeauty";
import { howGreatThouArt } from "./howGreatThouArt";
import { thereIsAGreen } from "./thereIsAGreen";

export const himnoj = {
  bookTitle: "Himnoj",
  bookTitleShort: "Himnoj",
  subtitle: "",
  summary: "",
  chapters: [comeThouFont, forTheBeauty, howGreatThouArt, thereIsAGreen],
} as const satisfies Book;
