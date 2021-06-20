import { TestBed } from '@angular/core/testing';

import { CRUDService } from './crud.service';
import { IUsuario } from '../models/usuarios';

describe('CRUDService', () => {
  let service: CRUDService<IUsuario>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
