import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { PortfolioCoreService } from './portfolio-core.service';
import { PortfolioResumeModel } from '../shared/models/master/portfolio-resume.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  resumeData: PortfolioResumeModel = null;
  bIsDataLoaded: boolean = false;
  resumeURL: string = '';

  constructor(private portfolioCore: PortfolioCoreService) {
    this.fetchResumeData();
  }

  fetchResumeData(): void {
    this.resumeURL = 'assets/data/resume-data.json';

    this.portfolioCore
      .getHTTPResponseForURL(this.resumeURL)
      .subscribe((response: HttpResponse<PortfolioResumeModel>) => {
        this.resumeData = {
          ...(response['body'] as PortfolioResumeModel)
        };
        setTimeout(() => {
          this.bIsDataLoaded = true;
        }, 1000);
      });
  }

}

