import { Component, OnInit } from '@angular/core';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';
import { IPortfolioHomeItemModel } from './portfolio-home-wrapper/portfolio-home-item/portfolio-home-item.model';

@Component({
  selector: 'app-portfolio-home-base',
  templateUrl: './portfolio-home-base.component.html',
  styleUrls: ['./portfolio-home-base.component.scss']
})
export class PortfolioHomeBaseComponent implements OnInit {

  oChildAssets: IPortfolioHomeItemModel[];

  constructor(
    private assetsService: PortfolioAssetsService
  ) { }

  ngOnInit() {
    this.oChildAssets = this.assetsService.oComponentAssets;
  }

}
