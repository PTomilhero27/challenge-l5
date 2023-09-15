import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { DetailsComponent } from './details.component';
import { SwService } from 'src/app/services/sw.service';
import { DetailsStateService } from 'src/app/services/details-state.service';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let swService: SwService;
  let detailsStateService: DetailsStateService;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent, AdditionalInfoComponent],
      imports: [RouterTestingModule, HttpClientModule, BreadcrumbModule],
      providers: [SwService, DetailsStateService],
    });

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    swService = TestBed.inject(SwService);
    detailsStateService = TestBed.inject(DetailsStateService);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
  });

  it('devera criar o component', () => {
    expect(component).toBeTruthy();
  });

  it('devera start and fetch details', () => {
    const mockDetails = { name: 'Mock Details' };
    spyOn(detailsStateService, 'getWithType').and.returnValue(mockDetails);
    spyOn(swService, 'getNextInfo').and.returnValue(of(mockDetails));
    component.type = 'PERSONAGEM';
    component.start();
    expect(component.details).toEqual(mockDetails);
  });

  it('devera nevegar para um novo details e salvar as informações', () => {
    const mockDetails = { name: 'Mock Details' };
    const navigateSpy = spyOn(router, 'navigate');
    spyOn(detailsStateService, 'saveWithType');
    component.newDetails({ tipo: 'FILMES', info: [mockDetails], title: 'Filmes' }, mockDetails);
    expect(navigateSpy).toHaveBeenCalledWith([], { relativeTo: route, queryParams: { type: 'FILMES' } });
    expect(detailsStateService.saveWithType).toHaveBeenCalledWith('FILMES', mockDetails);
  });


});

