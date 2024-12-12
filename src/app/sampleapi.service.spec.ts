import { TestBed } from '@angular/core/testing';

import { SampleapiService } from './sampleapi.service';

describe('SampleapiService', () => {
  let service: SampleapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
