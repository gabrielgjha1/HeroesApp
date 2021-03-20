import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaHeroesComponent } from './tarjeta-heroes.component';

describe('TarjetaHeroesComponent', () => {
  let component: TarjetaHeroesComponent;
  let fixture: ComponentFixture<TarjetaHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
