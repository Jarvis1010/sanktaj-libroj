function convertToEsperantoXSystem(string: string) {
  return string
    .replace(/ĉ/g, "cx")
    .replace(/ĝ/g, "gx")
    .replace(/ĥ/g, "hx")
    .replace(/ĵ/g, "jx")
    .replace(/ŝ/g, "sx")
    .replace(/ŭ/g, "ux");
}

function convertFromEsperantoXSystem(string: string) {
  return string
    .replace(/cx/g, "ĉ")
    .replace(/gx/g, "ĝ")
    .replace(/hx/g, "ĥ")
    .replace(/jx/g, "ĵ")
    .replace(/sx/g, "ŝ")
    .replace(/ux/g, "ŭ");
}

export function stringToSlug(string: string) {
  return convertToEsperantoXSystem(string.toLowerCase().replace(/ /g, "-"));
}

export function slugToString(slug: string) {
  return convertFromEsperantoXSystem(slug.replace(/-/g, " ")).replace(
    /(?:^|\s)\S/g,
    (a) => a.toUpperCase(),
  );
}
