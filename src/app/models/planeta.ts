import { Filme } from "./filme";
import { Pessoas } from "./pessoas";

export interface Planeta {
    climate: string;
    created: Date;
    diameter: string;
    edited: Date;
    films: string[] | Filme[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[] | Pessoas[];
    people: string[] | Pessoas[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
  }