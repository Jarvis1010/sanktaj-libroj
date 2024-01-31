import { unuNifai } from "./1 Nifai";
import { duNifai } from "./2 Nifai";

export const LaLibroDeMormon = {
  testamentTitle: "La Libro De Mormon",
  books: [unuNifai, duNifai],
} as const satisfies Testament;
