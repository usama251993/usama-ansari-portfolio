import { Injectable } from '@angular/core';

import { IPortfolioNavbarModel } from '../shared/models/navbar/master/portfolio-navbar.model';
import { IPortfolioNavbarAssetsModel } from '../shared/models/navbar/children/portfolio-navbar-assets/portfolio-navbar-assets.model';
import { IPortfolioNavbarContentModel } from '../shared/models/navbar/children/portfolio-navbar-assets/portfolio-navbar-content/portfolio-navbar-content.model';
import { IPortfolioHomeItemModel } from '../modules/portfolio-home/portfolio-home-base/portfolio-home-wrapper/portfolio-home-item/portfolio-home-item.model';
import { IPortfolioComponentCommonModel } from '../shared/models/common/portfolio-component/portfolio-component-common.model';
import { IPortfolioResumeModel } from '../shared/models/resume/master/portfolio-resume.model';
import { PortfolioCoreService } from './portfolio-core.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioAssetsService {

  childViewAssets: HTMLDivElement[] = [];
  oNavbar: IPortfolioNavbarModel;
  oNavbarAssets: IPortfolioNavbarAssetsModel[];

  oComponentAssets: IPortfolioHomeItemModel[];
  oCommonAssets: IPortfolioComponentCommonModel[];

  mResumeData: IPortfolioResumeModel;

  constructor(
    private portfolioService: PortfolioCoreService
  ) {
    this.initAssets();
  }

  initAssets() {
    this.oNavbar = {
      contents: [],
      state: {
        bHasIcons: false,
        bIsActive: false,
        bIsMobile: false,
      },
      triggers: [
        {
          name: 'open',
          icon: { prefix: 'fas', name: 'bars', transform: { size: 'lg' } },
          show: true
        },
        {
          name: 'close',
          icon: { prefix: 'fas', name: 'times', transform: { size: 'lg' } },
          show: false
        }
      ]
    };

    this.oNavbarAssets = [
      {
        context: 'home',
        contents: [
          {
            icon: { prefix: 'fas', name: 'home', transform: { size: 'lg' } },
            detail: { content: 'introduction', clickAction: 'introduction' }
          },
          {
            icon: { prefix: 'far', name: 'address-card', transform: { size: 'lg' } },
            detail: { content: 'projects', clickAction: 'projects' }
          },
          {
            icon: { prefix: 'fas', name: 'icons', transform: { size: 'lg', } },
            detail: { content: 'skills', clickAction: 'skills' }
          },
          {
            icon: { prefix: 'fas', name: 'icons', transform: { size: 'lg', } },
            detail: { content: 'contact', clickAction: 'contact' }
          }
        ]
      },
      {
        context: 'interests',
        contents: [
          { detail: { content: 'introduction', clickAction: 'introduction' } },
          { detail: { content: 'projects', clickAction: 'projects' } },
          { detail: { content: 'skills', clickAction: 'skills' } },
          { detail: { content: 'contact', clickAction: 'contact' } }
        ]
      }
    ];

    this.oCommonAssets = [
      {
        name: 'upArrow',
        icon: { prefix: 'fas', name: 'chevron-up' }
      },
      {
        name: 'downArrow',
        icon: { prefix: 'fas', name: 'chevron-down' }
      }
    ];

    this.oComponentAssets = [
      {
        commonAssets: this.oCommonAssets,
        viewName: 'introduction'
      },
      {
        commonAssets: this.oCommonAssets,
        viewName: 'projects'
      },
      {
        commonAssets: this.oCommonAssets,
        viewName: 'skills'
      },
      {
        commonAssets: this.oCommonAssets,
        viewName: 'contact'
      }
    ];
  }

  scrollToNextView(currentView: HTMLDivElement): void {
    this.childViewAssets[this.childViewAssets.findIndex((element) => element === currentView) + 1].scrollIntoView({ behavior: 'smooth' });
  }

  getContextualNavbarElements(context: string): IPortfolioNavbarContentModel[] {
    return this.oNavbarAssets[this.oNavbarAssets.findIndex((element) => element.context === context)].contents;
  }

  fetchResumeData(): Observable<IPortfolioResumeModel> {
    return this.portfolioService.getHTTPResponseForURL(this.portfolioService.sResumeURL);
  }

}
