import { Component, OnInit, Input } from '@angular/core';
import { PortfolioResumeModel } from 'src/app/shared/models/master/portfolio-resume.model';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';

@Component({
  selector: 'app-portfolio-home-template',
  templateUrl: './portfolio-home-template.component.html',
  styleUrls: ['./portfolio-home-template.component.scss']
})
export class PortfolioHomeTemplateComponent implements OnInit {

  @Input() oComponentAssets: any;
  @Input() mResumeData: PortfolioResumeModel;

  // This service is required by child components
  constructor(private assetService: PortfolioAssetsService) { }

  ngOnInit() {
  }

}
