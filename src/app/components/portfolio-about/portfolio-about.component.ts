import {
  HttpResponse
} from '@angular/common/http';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  ChangeDetectorRef
} from '@angular/core';
import {
  MatTooltipDefaultOptions,
  MAT_TOOLTIP_DEFAULT_OPTIONS
} from '@angular/material';

import { IPortfolioResumeModel } from 'src/app/shared/models/resume/master/portfolio-resume.model';
import { PortfolioCoreService } from 'src/app/services/portfolio-core.service';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

export const tooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 250,
  hideDelay: 0,
  touchendHideDelay: 0
};

@Component({
  selector: 'app-portfolio-about',
  templateUrl: './portfolio-about.component.html',
  styleUrls: ['./portfolio-about.component.scss'],
  providers: [{
    provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
    useValue: tooltipDefaults
  }]
})
export class PortfolioAboutComponent implements OnInit {
  resumeData: IPortfolioResumeModel = null;
  bIsDataLoaded: boolean = false;
  resumeURL: string = '';
  bIsEnoughViewport: boolean = false;

  constructor(
    private portfolioService: PortfolioCoreService,
    private breakpoint: BreakpointObserver
  ) { }

  ngOnInit() {
    this.breakpoint.observe(['(max-width: 860px)']).subscribe((state: BreakpointState) => {
      this.bIsEnoughViewport = !state.matches;
    });
    this.fetchResumeData();
  }

  fetchResumeData(): void {
    this.resumeURL = 'assets/data/resume-data.json';
    this.portfolioService
      .getHTTPResponseForURL(this.resumeURL)
      .subscribe((response: HttpResponse<IPortfolioResumeModel>) => {
        this.resumeData = {
          ...(response['body'] as IPortfolioResumeModel)
        };
        setTimeout(() => {
          this.bIsDataLoaded = true;
          this.changeDetector.detectChanges();
          this.renderer.setAttribute(this.profilePhoto.nativeElement, 'style', 'background-image: url(\'/assets/media/images/usama-mini.jpg\')');
        }, 1000);
      });
  }

  getDuration(fromDate: string, toDate: string): number {
    return Math.ceil(
      (new Date(toDate).valueOf() - new Date(fromDate).valueOf()) /
      (1000 * 60 * 60 * 24 * 30)
    );
  }

  doNothing(): void { }
}