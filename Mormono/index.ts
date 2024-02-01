import { unuNifai } from "./1 Nifai";
import { duNifai } from "./2 Nifai";
import { enos } from "./Enos";

export const LaLibroDeMormon = {
  testamentTitle: "La Libro De Mormon",
  books: [unuNifai, duNifai, enos],
} as const satisfies Testament;
