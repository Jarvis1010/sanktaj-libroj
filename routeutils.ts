function convertToEsperantoXSystem(string: string) {
  return string
    .replace(/ĉ/g, "cx")
    .replace(/Ĉ/g, "CX")
    .replace(/ĝ/g, "gx")
    .replace(/Ĝ/g, "GX")
    .replace(/ĥ/g, "hx")
    .replace(/Ĥ/g, "HX")
    .replace(/ĵ/g, "jx")
    .replace(/Ĵ/g, "JX")
    .replace(/ŝ/g, "sx")
    .replace(/Ŝ/g, "SX")
    .replace(/ŭ/g, "ux")
    .replace(/Ŭ/g, "UX");
}

function convertFromEsperantoXSystem(string: string) {
  return string
    .replace(/cx/g, "ĉ")
    .replace(/cX/g, "ĉ")
    .replace(/CX/g, "Ĉ")
    .replace(/Cx/g, "Ĉ")
    .replace(/gx/g, "ĝ")
    .replace(/gX/g, "ĝ")
    .replace(/GX/g, "Ĝ")
    .replace(/Gx/g, "Ĝ")
    .replace(/hX/g, "ĥ")
    .replace(/HX/g, "ĥ")
    .replace(/Hx/g, "Ĥ")
    .replace(/hx/g, "Ĥ")
    .replace(/jx/g, "ĵ")
    .replace(/jX/g, "ĵ")
    .replace(/JX/g, "Ĵ")
    .replace(/Jx/g, "Ĵ")
    .replace(/sx/g, "ŝ")
    .replace(/sX/g, "ŝ")
    .replace(/SX/g, "Ŝ")
    .replace(/Sx/g, "Ŝ")
    .replace(/ux/g, "ŭ")
    .replace(/uX/g, "ŭ")
    .replace(/UX/g, "Ŭ")
    .replace(/Ux/g, "Ŭ");
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
