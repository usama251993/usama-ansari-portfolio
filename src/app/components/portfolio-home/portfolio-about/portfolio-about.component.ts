import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { PortfolioResumeModel } from 'src/app/models/portfolio-resume.model';
import { PortfolioCoreService } from 'src/app/services/portfolio-core.service';


@Component({
  selector: 'app-portfolio-about',
  templateUrl: './portfolio-about.component.html',
  styleUrls: ['./portfolio-about.component.scss']
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

  doNothing(): void { }

}
