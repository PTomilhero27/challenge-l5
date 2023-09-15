import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('devera criar o component', () => {
    expect(component).toBeTruthy();
  });

  it('devera nevegar para pagina "info" com o tipo correto', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    const tipo = 'PERSONAGEM';

    component.showInfo(tipo);

    expect(navigateSpy).toHaveBeenCalledWith(['/info'], {
      queryParams: { type: tipo },
    });
  });

});
