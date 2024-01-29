import { unuJohano } from "./1 Johano";
import { unuKorintoj } from "./1 Korintoj";
import { unuPetro } from "./1 Petro";
import { unuTesalonikanoj } from "./1 Tesalonikanoj";
import { unuTimoteo } from "./1 Timoteo";
import { duJohano } from "./2 Johano";
import { duKorintoj } from "./2 Korintoj";
import { duPetro } from "./2 Petro";
import { duTesalonikanoj } from "./2 Tesalonikanoj";
import { duTimoteo } from "./2 Timoteo";
import { triJohano } from "./3 Johano";
import { Agoj } from "./Agoj";
import { Apokalipso } from "./Apokalipso";
import { Efesanoj } from "./Efesanoj";
import { Filemon } from "./Filemon";
import { Filipanoj } from "./Filipanoj";
import { Galatoj } from "./Galatoj";
import { Hebreoj } from "./Hebreoj";
import { Jakobo } from "./Jakobo";
import { Johano } from "./Johano";
import { Judas } from "./Judas";
import { Koloseanoj } from "./Koloseanoj";
import { Luko } from "./Luko";
import { Marko } from "./Marko";
import { Mateo } from "./Mateo";
import { Romanoj } from "./Romanoj";
import { Tito } from "./Tito";

export const NovaTestimento = {
  testamentTitle: "Nova Testamento",
  books: [
    unuJohano,
    unuKorintoj,
    unuPetro,
    unuTesalonikanoj,
    unuTimoteo,
    duJohano,
    duKorintoj,
    duPetro,
    duTesalonikanoj,
    duTimoteo,
    triJohano,
    Agoj,
    Apokalipso,
    Efesanoj,
    Filemon,
    Filipanoj,
    Galatoj,
    Hebreoj,
    Jakobo,
    Johano,
    Judas,
    Koloseanoj,
    Luko,
    Marko,
    Mateo,
    Romanoj,
    Tito,
  ],
} as const satisfies Testament;
