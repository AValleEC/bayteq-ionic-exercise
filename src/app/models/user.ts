/**
 * Creado a través de https://jvilk.com/MakeTypes
 */

import { DobOrRegistered } from "./doborregistered";
import { Id } from "./id";
import { Login } from "./login";
import { Name } from "./name";
import { Picture } from "./picture";

  export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DobOrRegistered;
    registered: DobOrRegistered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
  }