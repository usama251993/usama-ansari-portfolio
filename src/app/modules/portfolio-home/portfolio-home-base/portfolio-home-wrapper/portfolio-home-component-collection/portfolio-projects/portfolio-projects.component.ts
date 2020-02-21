import { Component, OnInit } from '@angular/core';
import { PortfolioHomeItemTemplateComponent } from '../../../portfolio-home-item-template/portfolio-home-item-template.component';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent extends PortfolioHomeItemTemplateComponent implements OnInit {

  constructor(
    public assetsService: PortfolioAssetsService
  ) {
    super(assetsService);
  }

  ngOnInit() {
  }

}
