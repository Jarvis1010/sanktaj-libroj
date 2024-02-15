import { unuNifai } from "./1 Nifai";
import { duNifai } from "./2 Nifai";
import { enos } from "./Enos";
import { mozaja } from "./Mozaja";
import { alma } from "./Alma";
import { helaman } from "./Helaman";

export const LaLibroDeMormon = {
  testamentTitle: "La Libro De Mormon",
  books: [unuNifai, duNifai, enos, mozaja, alma, helaman],
} as const satisfies Testament;
