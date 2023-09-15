import { Filme } from "./filme";
import { Pessoas } from "./pessoas";

export interface Nave {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: string[] | Filme[];
    pilots: string[] | Pessoas[];
    people: string[] | Pessoas[];
    starship_class: string;
    url: string;
  }