/**
 * Creado a través de https://jvilk.com/MakeTypes
 */

import { Info } from "./info";
import { User } from "./user";

export interface DataSource {
    results?: (User)[] | null;
    info: Info;
  }