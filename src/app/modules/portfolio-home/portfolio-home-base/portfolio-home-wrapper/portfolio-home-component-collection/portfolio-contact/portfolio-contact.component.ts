import { Component, OnInit } from '@angular/core';
import { PortfolioHomeItemTemplateComponent } from '../../../portfolio-home-item-template/portfolio-home-item-template.component';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.scss']
})
export class PortfolioContactComponent extends PortfolioHomeItemTemplateComponent implements OnInit {

  constructor(
    public assetsService: PortfolioAssetsService
  ) {
    super(assetsService);
  }

  ngOnInit() {
  }

}
