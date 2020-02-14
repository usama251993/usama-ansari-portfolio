import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PortfolioHomeTemplateComponent } from '../../common/portfolio-home-template/portfolio-home-template.component';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.scss']
})
export class PortfolioContactComponent
  extends PortfolioHomeTemplateComponent
  implements OnInit {

  constructor(private componentAssetService: PortfolioAssetsService) {
    super(componentAssetService);
  }

  @ViewChild('contact', { static: true }) childRef: ElementRef;

  ngOnInit() {
    this.componentAssetService.childViews.push(this.childRef.nativeElement);
    this.oComponentAssets['assets']['flag']['isLastView'] = this.oComponentAssets['views'].slice(-1)[0]['name'] === this.oComponentAssets['assets']['text']['viewName'] ? true : false;
  }

  scrollToNextView(currentView: HTMLDivElement): void {
    this.componentAssetService.scrollToNextView(currentView);
  }

}
