/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { localStorageService } from './localStorage.service';

describe('StorageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [localStorageService]
    });
  });

  it('should ...', inject([localStorageService], (service: localStorageService) => {
    expect(service).toBeTruthy();
  }));
});
