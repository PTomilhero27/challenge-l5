import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pessoas } from '../models/pessoas';
import { Filme } from '../models/filme';
import { tipo } from '../models/tipos';
import { Planeta } from '../models/planeta';
import { Especie } from '../models/especie';
import { Nave } from '../models/nave';
import { Veiculo } from '../models/veiculo';

@Injectable({
  providedIn: 'root',
})
export class DetailsStateService {
  public pessoas = new BehaviorSubject<Pessoas>(this.pessoasVazio());
  public filmes = new BehaviorSubject<Filme>(this.filmesVazio());
  public planetas = new BehaviorSubject<Planeta>(this.planetasVazio());
  public especies = new BehaviorSubject<Especie>(this.especiesVazio());
  public naves = new BehaviorSubject<Nave>(this.naveVazio());
  public veiculos = new BehaviorSubject<Veiculo>(this.veiculosVazio());


  constructor() {
    this.pessoas = new BehaviorSubject<Pessoas>(this.pessoasVazio());
    this.filmes = new BehaviorSubject<Filme>(this.filmesVazio());
    this.planetas = new BehaviorSubject<Planeta>(this.planetasVazio());
    this.especies = new BehaviorSubject<Especie>(this.especiesVazio());
    this.naves = new BehaviorSubject<Nave>(this.naveVazio());
    this.veiculos = new BehaviorSubject<Veiculo>(this.veiculosVazio());
  }

  private pessoasVazio(): Pessoas {
   return {
    birth_year: '',
    created: new Date(),
    edited: new Date(),
    eye_color: '',
    films: [],
    gender: '',
    hair_color: '',
    height: '',
    homeworld: '',
    mass: '',
    name: '',
    skin_color: '',
    species: [],
    starships: [],
    url: '',
    vehicles: [],

   }  
  }

  private filmesVazio(): Filme {
    return {
      characters: [],
      created: new Date(),
      director: '',
      edited: new Date(),
      episode_id: '',
      name: '',
      opening_crawl: '',
      planets:  [],
      producer: '',
      release_date: new Date(),
      species: [],
      starships: [],
      title: '',
      url: '',
      vehicles: [],
      people: [],
    }

  }

  private planetasVazio(): Planeta {
    return {
      edited: new Date(),
      created: new Date(),
      residents: [],
      people: [],
      films: [],
      climate: "",
      diameter: "",
      gravity: "",
      name: '',
      orbital_period: "",
      population: "",
      rotation_period: "",
      surface_water: "",
      terrain: "",
      url: "",
    }
  }

  private especiesVazio(): Especie {

    return {
      average_height: '',
      average_lifespan: '',
      classification: '',
      designation: '',
      eye_colors: '',
      hair_colors: '',
      homeworld: '',
      language: '',
      name: '',
      skin_colors: '',
      url: '',
      films: [],
      people: [],
      created: new Date(),
      edited: new Date(),
    }

  }

  private naveVazio(): Nave {

    return {
      cargo_capacity: '',
      consumables: "",
      cost_in_credits: "",
      crew: '',
      hyperdrive_rating: '',
      length: '',
      manufacturer: '',
      max_atmosphering_speed: '',
      MGLT: '',
      model: '',
      name: "",
      passengers: '',
      starship_class: "",
      url: "",
      films: [],
      pilots: [],
      people: [],
      created: new Date(),
      edited: new Date(),
    }

  }

  private veiculosVazio(): Veiculo {

    return {
      people: [],
      cargo_capacity: '',
      consumables: "",
      cost_in_credits: "",
      created: new Date(),
      crew: "",
      edited: new Date(),
      films: [],
      length: "",
      manufacturer: "",
      max_atmosphering_speed: "",
      model: "",
      name: "",
      passengers: "",
      pilots: [],
      url: "",
      vehicle_class: "",
    }

  }

  public saveWithType(type: string, detalhes: any) {
    switch (type) {
      case tipo.PERSONAGEM:
        this.pessoas.next(detalhes);
      break;

      case tipo.FILMES:
        this.filmes.next(detalhes);
      break;

      case tipo.PLANETA:
        this.planetas.next(detalhes);
      break;
      
      case tipo.ESPECIES:
        this.especies.next(detalhes);
      break;

      case tipo.NAVES:
        this.naves.next(detalhes);
      break;

      case tipo.VEICULOS:
        this.veiculos.next(detalhes);
      break;
    }
  }

  public getWithType(type: string) {
    let detalhes: any;
    switch (type) {
      case tipo.PERSONAGEM:
       detalhes = this.pessoas.value;
      break;

      case tipo.FILMES:
        detalhes = this.filmes.value;
       break;

       case tipo.PLANETA:
        detalhes = this.planetas.value;
       break;

       case tipo.ESPECIES:
        detalhes = this.especies.value;
       break;

       case tipo.NAVES:
        detalhes = this.naves.value;
       break;

       case tipo.VEICULOS:
        detalhes = this.veiculos.value;
       break;
    }

    return detalhes
  }

}
