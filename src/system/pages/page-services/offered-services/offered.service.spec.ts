import { TestBed } from '@angular/core/testing';

import { OfferedService } from './offered.service';

describe('OfferedService', () => {
  let service: OfferedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
