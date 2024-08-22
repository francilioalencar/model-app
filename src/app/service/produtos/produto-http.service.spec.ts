import { TestBed } from '@angular/core/testing';

import { ProdutoHttpService } from './produto-http.service';

describe('ProdutoHttpService', () => {
  let service: ProdutoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
