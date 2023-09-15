import { Filme } from "./filme";
import { Pessoas } from "./pessoas";
import { Planeta } from "./planeta";

export interface Especie {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: Date;
    designation: string;
    edited: Date;
    eye_colors: string;
    hair_colors: string;
    homeworld: string | Planeta;
    language: string;
    name: string;
    people: string[] | Pessoas[];
    films: string[] | Filme[];
    skin_colors: string;
    url: string;
  }