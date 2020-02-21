import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { PortfolioCoreService } from './portfolio-core.service';
import { IPortfolioResumeModel } from '../shared/models/resume/master/portfolio-resume.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  resumeData: IPortfolioResumeModel = null;
  bIsDataLoaded: boolean = false;
  resumeURL: string = '';

  constructor(private portfolioCore: PortfolioCoreService) {
    this.fetchResumeData();
  }

  fetchResumeData(): void {
    this.resumeURL = 'assets/data/resume-data.json';

    this.portfolioCore
      .getHTTPResponseForURL(this.resumeURL)
      .subscribe((response: HttpResponse<IPortfolioResumeModel>) => {
        this.resumeData = {
          ...(response['body'] as IPortfolioResumeModel)
        };
        setTimeout(() => {
          this.bIsDataLoaded = true;
        }, 1000);
      });
  }

}

