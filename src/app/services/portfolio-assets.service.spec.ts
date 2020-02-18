import { TestBed } from '@angular/core/testing';

import { PortfolioAssetsService } from './portfolio-assets.service';

describe('PortfolioAssetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortfolioAssetsService = TestBed.get(PortfolioAssetsService);
    expect(service).toBeTruthy();
  });
});
