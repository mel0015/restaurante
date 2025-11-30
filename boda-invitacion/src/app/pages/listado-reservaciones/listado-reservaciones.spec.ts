import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReservaciones } from './listado-reservaciones';

describe('ListadoReservaciones', () => {
  let component: ListadoReservaciones;
  let fixture: ComponentFixture<ListadoReservaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoReservaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoReservaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
