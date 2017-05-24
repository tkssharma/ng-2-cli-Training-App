/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrainingServiceService } from './training-service.service';

describe('TrainingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingServiceService]
    });
  });

  it('should ...', inject([TrainingServiceService], (service: TrainingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
