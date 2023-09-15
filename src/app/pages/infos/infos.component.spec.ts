import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InfosComponent } from './infos.component';
import { SwService } from 'src/app/services/sw.service';
import { DetailsStateService } from 'src/app/services/details-state.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';

describe('InfosComponent', () => {
  let component: InfosComponent;
  let fixture: ComponentFixture<InfosComponent>;
  let swService: SwService;
  let detailsStateService: DetailsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfosComponent],
      imports: [RouterTestingModule, HttpClientModule, BreadcrumbModule], // Include HttpClientModule in imports
      providers: [SwService, DetailsStateService],
    });

    fixture = TestBed.createComponent(InfosComponent);
    component = fixture.componentInstance;
    swService = TestBed.inject(SwService);
    detailsStateService = TestBed.inject(DetailsStateService);

  });

  it('devera criar o  component', () => {
    expect(component).toBeTruthy();
  });

  it('deveera chamar SwService.getGeralInfo no ngOnInit', () => {
    const getGeralInfoSpy = spyOn(swService, 'getGeralInfo').and.returnValue(of({ results: [] }));
    component.ngOnInit();
    expect(getGeralInfoSpy).toHaveBeenCalledWith(component.type);
  });

  it('devera limpar as informações e chamar a função start() quando o search estiver vazio', () => {
    const clearInfosSpy = spyOn(component, 'clearInfos');
    const startSpy = spyOn(component, 'start');
    component.realizarPesquisa('');
    expect(clearInfosSpy).toHaveBeenCalled();
    expect(startSpy).toHaveBeenCalled();
  });

  it('devera navegar para /detalhes on details', () => {
    const saveWithTypeSpy = spyOn(detailsStateService, 'saveWithType');
    const navigateSpy = spyOn(component['router'], 'navigate');
    const detalhes = {}; 
    component.details(detalhes);
    expect(saveWithTypeSpy).toHaveBeenCalledWith(component.type, detalhes);
    expect(navigateSpy).toHaveBeenCalledWith(['/detalhes'], { queryParams: { type: component.type } });
  });

});
