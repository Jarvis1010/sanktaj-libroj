import { unuKroniko } from "./1 Kroniko";
import { unuRegxoj } from "./1 Regxoj";
import { unuSamuelo } from "./1 Samuelo";
import { duKroniko } from "./2 Kroniko";
import { duRegxoj } from "./2 Regxoj";
import { duSamuelo } from "./2 Samuelo";
import { AltKanto } from "./Alt Kanto";
import { Amos } from "./Amos";
import { Cefanja } from "./Cefanja";
import { Daniel } from "./Daniel";
import { Eliro } from "./Eliro";
import { Ester } from "./Ester";
import { Ezra } from "./Ezra";
import { Genezo } from "./Genezo";
import { HXabakuk } from "./HXabakuk";
import { HXagaja } from "./HXagaja";
import { Hosxea } from "./Hosxea";
import { Ijob } from "./Ijob";
import { Jehxezkel } from "./Jehxezkel";
import { Jeremia } from "./Jeremia";
import { Jesaja } from "./Jesaja";
import { Joel } from "./Joel";
import { Jona } from "./Jona";
import { Josuo } from "./Josuo";
import { Jugxistoj } from "./Jugxistoj";
import { Levidoj } from "./Levidoj";
import { Malahxi } from "./Malahxi";
import { Mihxa } from "./Mihxa";
import { Nahxum } from "./Nahxum";
import { Nehxemja } from "./Nehxemja";
import { Nombroj } from "./Nombroj";
import { Obadja } from "./Obadja";
import { Plorkantoj } from "./Plorkantoj";
import { Predikanto } from "./Predikanto";
import { Psalmaro } from "./Psalmaro";
import { Readmono } from "./Readmono";
import { Rut } from "./Rut";
import { Sentencoj } from "./Sentencoj";
import { Zehxarja } from "./Zehxarja";

export const MalnovaTestimento = {
  testamentTitle: "Malnova Testamento",
  books: [
    unuKroniko,
    unuRegxoj,
    unuSamuelo,
    duKroniko,
    duRegxoj,
    duSamuelo,
    AltKanto,
    Amos,
    Cefanja,
    Daniel,
    Eliro,
    Ester,
    Ezra,
    Genezo,
    HXabakuk,
    HXagaja,
    Hosxea,
    Ijob,
    Jehxezkel,
    Jeremia,
    Jesaja,
    Joel,
    Jona,
    Josuo,
    Jugxistoj,
    Levidoj,
    Malahxi,
    Mihxa,
    Nahxum,
    Nehxemja,
    Nombroj,
    Obadja,
    Plorkantoj,
    Predikanto,
    Psalmaro,
    Readmono,
    Rut,
    Sentencoj,
    Zehxarja,
  ],
} as const satisfies Testament;
