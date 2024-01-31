import { chapter1 } from "./chapter1";
import { chapter2 } from "./chapter2";
import { chapter3 } from "./chapter3";
import { chapter4 } from "./chapter4";
import { chapter5 } from "./chapter5";
import { chapter6 } from "./chapter6";
import { chapter7 } from "./chapter7";
import { chapter16 } from "./chapter16";
import { chapter17 } from "./chapter17";
import { chapter18 } from "./chapter18";

export const unuNifai = {
  bookTitle: "La Unua Libro De Nifai",
  bookTitleShort: "1 Nifai",
  subtitle: "Lia regado kaj lia servado",
  summary:
    "Rakonto de Lehi, kaj lia edzino Sariah, kaj liaj kvar filoj nomitaj, komencante per la plej maljuna, Laman, Lemuel, Sam, kaj Nephi. La Eternulo avertas Lehion, ke li eliru la landon Jerusaleman ĉar li profetis al la popolo pri ilia maljusteco kaj ili celas detrui lian vivon. Li entreprenas vojaĝon tri tagojn en la sovaĝejo. Nephi prenas siajn fratojn kaj reiras al la lando Jerusalema celante la kronikon de la judoj. La rakonto de iliaj suferadoj. Ili edzinigas al si la filinojn de Iŝmael. Ili prenas siajn familiojn kaj eliras en la sovaĝejon. La direkto de iliajn vojaĝadojn. Ili venas al la grandaj akvoj. La fratoj de Nephi ribelas kontraŭ li. Li hontigas ilin kaj konstruas ŝipon. Ili nomas la lokon Fruktoriĉo. Ili transiras la grandajn akvojn en la promesitan landon, ktp. Ĉi tio estas laŭ la rakonto de Nephi, alivorte, mi, Nephi, skribis ĉi tiun kronikon.",
  chapters: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter16,
    chapter17,
    chapter18,
  ],
} as const satisfies Book;
