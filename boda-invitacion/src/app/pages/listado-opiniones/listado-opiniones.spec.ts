import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoOpiniones } from './listado-opiniones';

describe('ListadoOpiniones', () => {
  let component: ListadoOpiniones;
  let fixture: ComponentFixture<ListadoOpiniones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoOpiniones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoOpiniones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
