import { Component, OnInit } from '@angular/core';
import { PortfolioHomeItemTemplateComponent } from '../../../portfolio-home-item-template/portfolio-home-item-template.component';
import { IPortfolioHomeItemModel } from '../../portfolio-home-item/portfolio-home-item.model';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';
import { IPortfolioResumeModel } from 'src/app/shared/models/resume/master/portfolio-resume.model';

interface IPortfolioIntroductionModel extends IPortfolioHomeItemModel {
  oAsset: {
    text: {
      description: {
        question: string,
        shortLines: string[]
      },
      fullName: {},
      greetingText: string
    },
    element: {},
    flag: {}
  }
}

@Component({
  selector: 'app-portfolio-introduction',
  templateUrl: './portfolio-introduction.component.html',
  styleUrls: ['./portfolio-introduction.component.scss']
})
export class PortfolioIntroductionComponent extends PortfolioHomeItemTemplateComponent implements OnInit {

  constructor(
    public assetsService: PortfolioAssetsService
  ) {
    super(assetsService);
  }

  oIntroductionAsset: IPortfolioIntroductionModel;
  bIsDataLoaded: boolean;

  ngOnInit() {
    this.bIsDataLoaded = false;
    this.getResumeData();
    setTimeout(() => {
      this.bIsDataLoaded = true;
    }, 1500);
  }

  getResumeData(): void {
    this.assetsService.fetchResumeData().subscribe((response: IPortfolioResumeModel) => {
      this.mResumeData = response;
      this.initComponentAssets(this.mResumeData);
      console.log(this.oIntroductionAsset);
    })
  }

  initComponentAssets(resumeData: IPortfolioResumeModel): void {
    this.oIntroductionAsset = {
      commonAssets: this.oComponentAsset.commonAssets,
      viewName: this.oComponentAsset.viewName,
      oAsset: {
        text: {
          description: {
            question: 'What do I do?',
            shortLines: [
              'I design pages, which users would like to play with',
              'Big fan of Angular and Material Design'
            ]
          },
          fullName: resumeData.biodata.fullName,
          greetingText: 'Hi, I am'
        },
        element: {},
        flag: {}
      }
    }
  }

}
