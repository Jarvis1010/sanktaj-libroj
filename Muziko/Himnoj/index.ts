import { comeThouFont } from "./comeThouFont";
import { forTheBeauty } from "./forTheBeauty";
import { howGreatThouArt } from "./howGreatThouArt";

export const himnoj = {
  bookTitle: "Himnoj",
  bookTitleShort: "Himnoj",
  subtitle: "",
  summary: "",
  chapters: [comeThouFont, forTheBeauty, howGreatThouArt],
} as const satisfies Book;
