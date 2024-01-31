import { LaLibroDeMormon } from "./Mormono";
import { MalnovaTestimento } from "./MalnovaTestimento";
import { Muziko } from "./Muziko";
import { NovaTestimento } from "./NovaTestimento";
import { stringToSlug } from "./routeutils";

export const testaments = [
  MalnovaTestimento,
  NovaTestimento,
  LaLibroDeMormon,
  Muziko,
] as const;

export const testamentTitles = testaments.map(
  (testament) => testament.testamentTitle,
);

export const testamentSlugMap = testamentTitles.reduce(
  (map, testamentTitle) => {
    return { ...map, [testamentTitle]: stringToSlug(testamentTitle) };
  },
  {} as Record<string, string>,
);

export const testamentMap = testaments.reduce((map, testament) => {
  map[testament.testamentTitle] = testament;
  return map;
}, {} as Record<(typeof testamentTitles)[number], Testament>);
