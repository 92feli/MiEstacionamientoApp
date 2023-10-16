import { TestBed } from '@angular/core/testing';

import { PaginaprotegidaGuard } from './paginaprotegida.guard';

describe('PaginaprotegidaGuard', () => {
  let guard: PaginaprotegidaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaginaprotegidaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
