import { Component, OnInit, Input } from '@angular/core';
import { IPortfolioHomeItemModel } from '../portfolio-home-wrapper/portfolio-home-item/portfolio-home-item.model';
import { IPortfolioResumeModel } from 'src/app/shared/models/resume/master/portfolio-resume.model';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-portfolio-home-item-template',
  templateUrl: './portfolio-home-item-template.component.html',
  styleUrls: ['./portfolio-home-item-template.component.scss']
})
export class PortfolioHomeItemTemplateComponent implements OnInit {

  @Input() oComponentAsset: IPortfolioHomeItemModel;
  @Input() mResumeData: IPortfolioResumeModel;

  constructor(
    public assetsService: PortfolioAssetsService
  ) { }

  ngOnInit() {
    // this.assetsService.fetchResumeData().then((response: HttpResponse<IPortfolioResumeModel>) => {
    //   this.mResumeData = response.body;
    // })
  }

}
