import { Coordinates } from "./coordinates";
import { Street } from "./street";
import { Timezone } from "./timezone";

/**
 * Creado a través de https://jvilk.com/MakeTypes
 */
  export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
  }