import { SwService } from 'src/app/services/sw.service';
import { DetailsStateService } from './../../services/details-state.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoTraduzido, tipo } from 'src/app/models/tipos';
import { Filme } from 'src/app/models/filme';
import { Planeta } from 'src/app/models/planeta';
import { Nave } from 'src/app/models/nave';
import { Especie } from 'src/app/models/especie';
import { Veiculo } from 'src/app/models/veiculo';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumb } from 'src/app/components/breadcrumb/breadcrumb.component';

interface Bloco {
  title: string,
  info: Filme[] | Nave[] | any[],
  tipo: string
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public details: any;

  public blocos: Bloco[] = [];
  public type: string = '';
  public breadCrumb: BreadCrumb[] = [];

  constructor(private detailsStateService: DetailsStateService, private router: Router, private swService: SwService, private route: ActivatedRoute ) {
    this.type = this.router.routerState.snapshot.root.queryParams['type'];
  }

  ngOnInit(): void {
    this.start()
  }

  getDetails(url: string): Observable<any> {
    return this.swService.getNextInfo(url);
  }


  start() {
    this.blocos = [];
    this.details = this.detailsStateService.getWithType(this.type)

    switch (this.type) {
      case tipo.PERSONAGEM:
        this.getDetails(this.details.homeworld).subscribe((res: Planeta) => this.details.homeworld = res);
      break;
    }


    if(this.details?.films) {
      let films: Filme[] = [];
      this.details?.films?.forEach((filmes: string) => {
        this.getDetails(filmes).subscribe((res: Filme) => {
          res.name = res.title;
          films.push(res)
        });
      });
      this.blocos.push({info: films, title: "Filmes", tipo: tipo.FILMES })
    }

    if(this.details?.planets) {
      let planetas: Planeta[] = [];
      this.details?.planets?.forEach((planeta: string) => {
        this.getDetails(planeta).subscribe((res: Planeta) => {
          planetas.push(res)
        });
      });
      this.blocos.push({info: planetas, title: "Planetas", tipo: tipo.PLANETA })
    }

    if(this.details?.starships) {
      let naves: Nave[] = [];
      this.details?.starships?.forEach((nave: string) => {
        this.getDetails(nave).subscribe((res: Nave) => {
          naves.push(res)
        });
      });
      this.blocos.push({info: naves, title: "Naves", tipo: tipo.NAVES})
    }

    if(this.details?.species) {
      let especies: Especie[] = [];
      this.details?.species?.forEach((especie: string) => {
        this.getDetails(especie).subscribe((res: Especie) => {
          especies.push(res)
        });
      });
      this.blocos.push({info: especies, title: "Espécies", tipo: tipo.ESPECIES })
    }

    if(this.details?.vehicles) {
      let veiculos: Veiculo[] = [];
      this.details?.vehicles?.forEach((veiculo: string) => {
        this.getDetails(veiculo).subscribe((res: Veiculo) => {
          veiculos.push(res)
        });
      });
      this.blocos.push({info: veiculos, title: "Veículos", tipo: tipo.VEICULOS })
    }

    if(this.details?.people) {
      let pessoas: Veiculo[] = [];
      this.details?.people?.forEach((pessoa: string) => {
        this.getDetails(pessoa).subscribe((res: Veiculo) => {
          pessoas.push(res)
        });
      });
      this.blocos.push({info: pessoas, title: "Personagem", tipo: tipo.PERSONAGEM })
    }

    this.breadCrumb = [
      {
        title: 'Pagina Inicial',
        route: '/'
      },
      {
        title: TipoTraduzido[this.type],
        route: 'info',
        tipo: this.type
      },
      {
        title: this.details?.name,
      },
    ]
    

  }

  //ir para a pagina de detalhes e salvando as informações pelo tipo
  newDetails(detalhes: Bloco, info: any) {
    this.type = detalhes.tipo
    this.detailsStateService.saveWithType(this.type, info)
    this.router.navigate([], {relativeTo: this.route,queryParams: {type: detalhes.tipo}});
    this.start();
  }

}
