import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, Type } from '@angular/core';
import { PortfolioIntroductionComponent } from '../portfolio-home-component-collection/portfolio-introduction/portfolio-introduction.component';
import { PortfolioProjectsComponent } from '../portfolio-home-component-collection/portfolio-projects/portfolio-projects.component';
import { PortfolioSkillsComponent } from '../portfolio-home-component-collection/portfolio-skills/portfolio-skills.component';
import { PortfolioContactComponent } from '../portfolio-home-component-collection/portfolio-contact/portfolio-contact.component';
import { IPortfolioHomeItemModel } from './portfolio-home-item.model';
import { PortfolioHomeItemTemplateComponent } from '../../portfolio-home-item-template/portfolio-home-item-template.component';
import { IPortfolioResumeModel } from 'src/app/shared/models/resume/master/portfolio-resume.model';

@Component({
  selector: 'app-portfolio-home-item',
  templateUrl: './portfolio-home-item.component.html',
  styleUrls: ['./portfolio-home-item.component.scss']
})
export class PortfolioHomeItemComponent implements OnInit {

  @Input() oComponentAsset: IPortfolioHomeItemModel;
  @Input() mResumeModel: IPortfolioResumeModel;

  @ViewChild('componentContainer', {
    read: ViewContainerRef,
    static: true
  }) vContainerRef: ViewContainerRef;

  readonly templateMapper: {} = {
    introduction: PortfolioIntroductionComponent,
    projects: PortfolioProjectsComponent,
    skills: PortfolioSkillsComponent,
    contact: PortfolioContactComponent
  };

  constructor(
    private cfResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    const cFactory: ComponentFactory<Component> = this.cfResolver.resolveComponentFactory(this.getChildComponent(this.oComponentAsset));
    const vcRef = this.vContainerRef;
    vcRef.clear();
    const componentRef = vcRef.createComponent(cFactory);
    (componentRef.instance as PortfolioHomeItemTemplateComponent).oComponentAsset = this.oComponentAsset;
  }

  getChildComponent(inputComponent: IPortfolioHomeItemModel): Type<Component> {
    return this.templateMapper[inputComponent.viewName];
  }

}
