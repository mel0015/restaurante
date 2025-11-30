import { TestBed } from '@angular/core/testing';

import { OpinionesService } from './opinionesService';

describe('Opiniones', () => {
  let service: OpinionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpinionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
