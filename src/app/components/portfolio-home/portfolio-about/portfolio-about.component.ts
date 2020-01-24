import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';

import { PortfolioResumeModel } from 'src/app/models/portfolio-resume.model';
import { PortfolioCoreService } from 'src/app/services/portfolio-core.service';

export const tooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 250,
  hideDelay: 0,
  touchendHideDelay: 0
};


@Component({
  selector: 'app-portfolio-about',
  templateUrl: './portfolio-about.component.html',
  styleUrls: ['./portfolio-about.component.scss'],
  providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: tooltipDefaults }]
})
export class PortfolioAboutComponent implements OnInit {

  resumeData: PortfolioResumeModel;
  isDataLoaded: boolean = false;
  resumeURL: string = '';

  constructor(
    private portfolioService: PortfolioCoreService
  ) { }

  ngOnInit() {
    this.fetchResumeData();
  }

  fetchResumeData(): void {
    this.resumeURL = 'assets/data/resume-data.json';
    this.portfolioService.getHTTPForURL(this.resumeURL).subscribe((response: HttpResponse<PortfolioResumeModel>) => {
      this.resumeData = { ...(response['body'] as PortfolioResumeModel) };
      this.isDataLoaded = true;
    });
  }

  getFullName(fullNameObject: { firstName: string, middleName?: string, lastName: string, }): string {
    if (fullNameObject.hasOwnProperty('middleName') && fullNameObject.middleName.length !== 0) {
      return fullNameObject.firstName + " " + fullNameObject.middleName + " " + fullNameObject.lastName;
    } else {
      return fullNameObject.firstName + " " + fullNameObject.lastName;
    }
  }

  getMonthDate(inputDate: string): string {
    return (new Date(inputDate)).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  }

  getDuration(fromDate: string, toDate: string): number {
    return Math.ceil((new Date(toDate).valueOf() - new Date(fromDate).valueOf()) / (1000 * 60 * 60 * 24 * 30));
  }

  doNothing(): void { }

}
