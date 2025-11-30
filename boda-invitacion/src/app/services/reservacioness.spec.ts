import { TestBed } from '@angular/core/testing';

import { ReservacionesService } from './reservacionesService';

describe('Reservacioness', () => {
  let service: ReservacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
