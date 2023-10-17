import { TestBed } from '@angular/core/testing';

import { RegistrarUserService } from './registrar-user.service';

describe('RegistrarUserService', () => {
  let service: RegistrarUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
