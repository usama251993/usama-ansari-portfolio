import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PortfolioHomeTemplateComponent } from 'src/app/components/common/portfolio-home-template/portfolio-home-template.component';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';

@Component({
  selector: 'app-portfolio-introduction',
  templateUrl: './portfolio-introduction.component.html',
  styleUrls: ['./portfolio-introduction.component.scss']
})
export class PortfolioIntroductionComponent
  extends PortfolioHomeTemplateComponent
  implements OnInit {


  constructor(private componentAssetService: PortfolioAssetsService) {
    super(componentAssetService);
  }

  @ViewChild('introduction', { static: true }) childRef: ElementRef;

  ngOnInit() {
    this.componentAssetService.childViews.push(this.childRef.nativeElement);
    this.oComponentAssets['assets']['text']['fullName'] = this.mResumeData.biodata.fullName;
    this.oComponentAssets['assets']['flag']['isLastView'] = this.oComponentAssets['views'].slice(-1)[0]['name'] === this.oComponentAssets['assets']['text']['viewName'] ? true : false;
  }

  scrollToNextView(currentView: HTMLDivElement): void {
    this.componentAssetService.scrollToNextView(currentView);
  }

}
