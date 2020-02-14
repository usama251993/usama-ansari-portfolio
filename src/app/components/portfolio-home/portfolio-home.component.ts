import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { forkJoin } from 'rxjs';

import { PortfolioContactComponent } from './portfolio-contact/portfolio-contact.component';
import { PortfolioIntroductionComponent } from './portfolio-introduction/portfolio-introduction.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';
import { PortfolioSkillsComponent } from './portfolio-skills/portfolio-skills.component';

import { PortfolioHomeTemplateComponent } from '../common/portfolio-home-template/portfolio-home-template.component';
import { PortfolioCoreService } from 'src/app/services/portfolio-core.service';
import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit, AfterViewInit, OnDestroy {

  bDisplayTopFab: boolean = false;
  crComponentRef: ComponentRef<any> = null;
  sResumeURL: string = '';
  sAssetsURL: string = '';
  oHomepageAssets: {} = null;

  @ViewChild('dynamicData', { read: ViewContainerRef, static: true }) public vcContainerRef: ViewContainerRef;
  readonly templateMapper: {} = {
    contact: PortfolioContactComponent,
    introduction: PortfolioIntroductionComponent,
    projects: PortfolioProjectsComponent,
    skills: PortfolioSkillsComponent
  };

  constructor(
    private portfolioService: PortfolioCoreService,
    private assetsService: PortfolioAssetsService,
    private resolver: ComponentFactoryResolver
  ) { }

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    window.pageYOffset ? this.bDisplayTopFab = true : this.bDisplayTopFab = false;
  }

  ngOnInit(): void {
    this.sAssetsURL = 'assets/data/component-assets.json';
    this.sResumeURL = 'assets/data/resume-data.json';
    this.oHomepageAssets = {};
  }

  ngAfterViewInit(): void {
    this.initAppAssets();
  }

  initAppAssets(): void {
    forkJoin([
      this.portfolioService.getHTTPResponseForURL(this.sResumeURL),
      this.portfolioService.getHTTPResponseForURL(this.sAssetsURL)
    ]).subscribe((responseArray: HttpResponse<any>[]) => {
      this.vcContainerRef.clear();
      this.oHomepageAssets['home'] = {};
      this.oHomepageAssets['home'] = { ...responseArray[1].body['home'] };
      this.oHomepageAssets['common'] = {};
      this.oHomepageAssets['common'] = { ...responseArray[1].body['common'] };

      responseArray[1].body['views']['homeComponent'].forEach((singleView: { name: string }) => {
        const componentFactory = this.resolver.resolveComponentFactory(this.templateMapper[singleView.name]);
        this.crComponentRef = this.vcContainerRef.createComponent(componentFactory);
        (this.crComponentRef.instance as PortfolioHomeTemplateComponent).oComponentAssets = {};
        (this.crComponentRef.instance as PortfolioHomeTemplateComponent).oComponentAssets['assets'] = { ...responseArray[1].body[singleView.name] };
        (this.crComponentRef.instance as PortfolioHomeTemplateComponent).oComponentAssets['common'] = { ...responseArray[1].body['common'] };
        (this.crComponentRef.instance as PortfolioHomeTemplateComponent).oComponentAssets['views'] = {};
        (this.crComponentRef.instance as PortfolioHomeTemplateComponent).oComponentAssets['views'] = responseArray[1].body['views']['homeComponent'];
        (this.crComponentRef.instance as PortfolioHomeTemplateComponent).mResumeData = responseArray[0].body;
      });
    });
  }

  ngOnDestroy(): void {
    this.assetsService.childViews = [];
    this.crComponentRef.destroy();
  }

  scrollToTop(): void {
    this.assetsService.childViews[0].scrollIntoView({ behavior: 'smooth' });
  }

}
