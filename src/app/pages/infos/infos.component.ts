import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, finalize } from 'rxjs';
import { BreadCrumb } from 'src/app/components/breadcrumb/breadcrumb.component';
import { Filme } from 'src/app/models/filme';
import { Pessoas } from 'src/app/models/pessoas';
import { TipoTraduzido, tipo } from 'src/app/models/tipos';
import { DetailsStateService } from 'src/app/services/details-state.service';
import { SwService } from 'src/app/services/sw.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer: ElementRef;

  private carregandoDados: boolean = false;

  public type: string = ""
  public infos: any[] = [];
  public next: string = ''
  public breadCrumb: BreadCrumb[] = [];

  public value: string = ''
  private searchTerm$ = new Subject<string>();


  constructor(private SwService: SwService, private router: Router, private el: ElementRef, private detailsStateService: DetailsStateService) {
    this.type = this.router.routerState.snapshot.root.queryParams['type'];
    this.scrollContainer = el;

    this.breadCrumb = [
      {
        title: 'Pagina Inicial',
        route: '/'
      },
      {
        title: TipoTraduzido[this.type],
      },

    ]

    this.searchTerm$.pipe(debounceTime(500)).subscribe((searchTerm: string) => this.realizarPesquisa(searchTerm));
  }

  ngOnInit(): void {
    this.start();
  }

  start() {
    this.SwService.getGeralInfo(this.type).subscribe(info => {
      this.next = info.next
      info.results.forEach((element: any) => {
      if(this.type == tipo.FILMES) {
        element.name = element.title
        element.people = element.characters
      } else if(this.type == tipo.PLANETA) {
        element.people = element.residents
      } else if (this.type == tipo.NAVES || this.type == tipo.VEICULOS ) {
        element.people = element.pilots
      }
        this.infos.push(element)
      });
    })
  }

  //Logica para chamar a função de carregar mais dados  quando der 100% do scroll 
  ngAfterViewInit() {
    const scrollContainer = this.scrollContainer.nativeElement;
    scrollContainer.addEventListener('scroll', () => {
      if (!this.carregandoDados && scrollContainer.scrollHeight - scrollContainer.scrollTop <= scrollContainer.clientHeight + 2) {
        this.carregandoDados = true;
        this.getMoreInfo();
      }
    });
  }

  //Função para chamar mais itens 
  getMoreInfo() {
    this.SwService.getNextInfo(this.next).pipe(finalize(() => this.carregandoDados = false)).subscribe(info => {
      this.next = info.next
      info.results.forEach((element: any) => this.infos.push(element));
    });
  }

  //Função para chamar dados no filtro quando parar de digitar por 500ms
  onInput(event: any) {
    this.searchTerm$.next(event.target.value);
  }

  realizarPesquisa(search: string) {
    
    if(search.length > 0) {
      const scrollContainer = this.scrollContainer.nativeElement;
      scrollContainer.scrollTop = 0;
      this.SwService.getGeralInfo(`${this.type}?search=${search}`).subscribe(info => {
        this.clearInfos();
        info.results.forEach((element: any) => {
          this.infos.push(element)
        });
    })
    } else {
      this.clearInfos();
      this.start()
    } 
  }

  //função para não repetir o this.infos = [] em outros lugares
  clearInfos() {
    this.infos = [];
  }

  //ir para a pagina de detalhes e salvando as informações pelo tipo
  details(detalhes: Pessoas | Filme | any) {
    this.detailsStateService.saveWithType(this.type, detalhes)
    this.router.navigate(["/detalhes"], {queryParams: {type: this.type}})
  }
}
