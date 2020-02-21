import { Component, OnInit, Input } from '@angular/core';
import { IPortfolioResumeModel } from 'src/app/shared/models/resume/master/portfolio-resume.model';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';

@Component({
  selector: 'app-portfolio-home-template',
  templateUrl: './portfolio-home-template.component.html',
  styleUrls: ['./portfolio-home-template.component.scss']
})
export class PortfolioHomeTemplateComponent implements OnInit {

  @Input() oComponentAssets: any;
  @Input() mResumeData: IPortfolioResumeModel;

  // This service is required by child components
  constructor(private assetService: PortfolioAssetsService) { }

  ngOnInit() {
  }

}
