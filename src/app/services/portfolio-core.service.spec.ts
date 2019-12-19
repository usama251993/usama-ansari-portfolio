import { TestBed } from '@angular/core/testing';

import { PortfolioCoreService } from './portfolio-core.service';

describe('PortfolioCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortfolioCoreService = TestBed.get(PortfolioCoreService);
    expect(service).toBeTruthy();
  });
});
