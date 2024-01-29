import { LaLibroDeMormono } from "./Mormono";
import { MalnovaTestimento } from "./MalnovaTestimento";
import { NovaTestimento } from "./NovaTestimento";

export const testaments = [
  MalnovaTestimento,
  NovaTestimento,
  LaLibroDeMormono,
] as const;

export const testamentTitles = testaments.map(
  (testament) => testament.testamentTitle,
);

export const testamentMap = testaments.reduce((map, testament) => {
  map[testament.testamentTitle] = testament;
  return map;
}, {} as Record<(typeof testamentTitles)[number], Testament>);
