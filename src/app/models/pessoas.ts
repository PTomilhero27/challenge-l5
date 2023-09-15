import { Especie } from "./especie";
import { Filme } from "./filme";
import { Nave } from "./nave";
import { Planeta } from "./planeta";
import { Veiculo } from "./veiculo";

export interface Pessoas {
    birth_year: string;
    eye_color: string;
    films: string[] | Filme[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string | Planeta;
    mass: string;
    name: string;
    skin_color: string;
    created: Date;
    edited: Date;
    species: string[] | Especie[];
    starships: string[] | Nave[];
    url: string;
    vehicles: string[] | Veiculo[];
  }