import { Filme } from "./filme";
import { Pessoas } from "./pessoas";

export interface Veiculo {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: string[] | Pessoas[];
    people: string[] | Pessoas[];
    films: string[] | Filme[];
    url: string;
    vehicle_class: string;
  }