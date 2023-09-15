import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tipo } from 'src/app/models/tipos';

export type Options = {
  title: string;
  tipo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public options: Options[] = [
    {title: 'Pessoas' , tipo: tipo.PERSONAGEM},
    {title: 'Planetas' , tipo: tipo.PLANETA},
    {title: 'Filmes', tipo: tipo.FILMES},
    {title: 'Espécies' , tipo: tipo.ESPECIES},
    {title: 'Veículos' , tipo: tipo.VEICULOS},
    {title: 'Espaçonaves' , tipo: tipo.NAVES},
  ]

  constructor(private router: Router) {}

  showInfo(tipo: string) {
    this.router.navigate(["/info"], {queryParams: {type: tipo}})
  }

}
