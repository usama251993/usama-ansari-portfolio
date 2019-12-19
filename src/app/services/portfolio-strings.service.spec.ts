import { TestBed } from '@angular/core/testing';

import { PortfolioStringsService } from './portfolio-strings.service';

describe('PortfolioStringsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortfolioStringsService = TestBed.get(PortfolioStringsService);
    expect(service).toBeTruthy();
  });
});
