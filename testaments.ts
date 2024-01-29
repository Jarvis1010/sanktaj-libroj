import { LaLibroDeMormono } from "./Mormono";
export const testaments = [LaLibroDeMormono] as const;

export const testamentTitles = testaments.map(
  (testament) => testament.testamentTitle,
);

export const testamentMap = testaments.reduce((map, testament) => {
  map[testament.testamentTitle] = testament;
  return map;
}, {} as Record<(typeof testamentTitles)[number], Testament>);
