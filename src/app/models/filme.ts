import { Especie } from "./especie";
import { Nave } from "./nave";
import { Pessoas } from "./pessoas";
import { Planeta } from "./planeta";
import { Veiculo } from "./veiculo";

export interface Filme {
    characters: string[] | Pessoas[];
    people: string[] | Pessoas[];
    created: Date;
    director: string;
    edited: Date;
    episode_id: string;
    opening_crawl: string;
    planets: string[] | Planeta[];
    producer: string;
    release_date: Date;
    species: string[] | Especie[];
    starships: string[] | Nave[];
    title: string;
    name: string;
    url: string;
    vehicles: string[] | Veiculo[];
  }