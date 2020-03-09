/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenInterceptorsService } from './TokenInterceptors.service';

describe('Service: TokenInterceptors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptorsService]
    });
  });

  it('should ...', inject([TokenInterceptorsService], (service: TokenInterceptorsService) => {
    expect(service).toBeTruthy();
  }));
});
