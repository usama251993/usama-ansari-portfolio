import { Component, OnInit, HostListener } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { PortfolioCoreService } from 'src/app/services/portfolio-core.service';
import { PortfolioResumeModel } from 'src/app/shared/models/master/portfolio-resume.model';
import { PortfolioStringsService } from 'src/app/services/portfolio-strings.service';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit {
  resumeData: PortfolioResumeModel = null;
  bIsDataLoaded: boolean = false;
  resumeURL: string = '';
  componentStrings: {} = {};
  bDisplayTopFab: boolean = false;

  componentIcons: {} = {};

  constructor(
    private portfolioService: PortfolioCoreService,
    private stringService: PortfolioStringsService
  ) { }

  ngOnInit() {
    this.initComponentIcons();
    this.fetchResumeData();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    window.pageYOffset ? this.bDisplayTopFab = true : this.bDisplayTopFab = false;
  }

  initComponentIcons(): void {
    this.componentIcons['upArrow'] = {
      prefix: 'fas',
      name: 'chevron-up',
    };
    this.componentIcons['downArrow'] = {
      prefix: 'fas',
      name: 'chevron-down',
    }
  }

  fetchResumeData(): void {
    this.resumeURL = 'assets/data/resume-data.json';
    this.portfolioService
      .getHTTPResponseForURL(this.resumeURL)
      .subscribe((response: HttpResponse<PortfolioResumeModel>) => {
        this.resumeData = {
          ...(response['body'] as PortfolioResumeModel)
        };
        this.initAppStrings(this.resumeData);
        this.bIsDataLoaded = true;
      });
  }

  initAppStrings(resumeData: PortfolioResumeModel): void {
    this.componentStrings = this.stringService['appStrings']['homeComponent'];
    this.componentStrings['fullName'] = resumeData['biodata']['fullName'];
  }

  scrollToNextView(nextView: HTMLDivElement): void {
    nextView.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop(firstView: HTMLDivElement): void {
    firstView.scrollIntoView({ behavior: 'smooth' });
  }

}
