/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScalesService } from './scales.service';

describe('ScalesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScalesService]
    });
  });

  it('should ...', inject([ScalesService], (service: ScalesService) => {
    expect(service).toBeTruthy();
  }));
});
