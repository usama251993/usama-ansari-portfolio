import { Component, OnInit } from '@angular/core';
import { PortfolioHomeItemTemplateComponent } from '../../../portfolio-home-item-template/portfolio-home-item-template.component';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.scss']
})
export class PortfolioSkillsComponent extends PortfolioHomeItemTemplateComponent implements OnInit {

  constructor(
    public assetsService: PortfolioAssetsService
  ) {
    super(assetsService);
  }

  ngOnInit() {
  }

}
