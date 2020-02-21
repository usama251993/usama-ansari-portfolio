import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PortfolioHomeTemplateComponent } from '../../common/portfolio-home-template/portfolio-home-template.component';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent
  extends PortfolioHomeTemplateComponent
  implements OnInit {

  @ViewChild('projects', { static: true }) childRef: ElementRef;

  constructor(private componentAssetService: PortfolioAssetsService) {
    super(componentAssetService);
  }

  ngOnInit() {
    this.componentAssetService.childViewAssets.push(this.childRef.nativeElement);
    this.oComponentAssets['assets']['flag']['isLastView'] = this.oComponentAssets['views'].slice(-1)[0]['name'] === this.oComponentAssets['assets']['text']['viewName'] ? true : false;
  }

  scrollToNextView(currentView: HTMLDivElement): void {
    this.componentAssetService.scrollToNextView(currentView);
  }

}
