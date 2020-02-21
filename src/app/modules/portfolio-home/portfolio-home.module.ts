import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioHomeBaseComponent } from './portfolio-home-base/portfolio-home-base.component';
import { PortfolioHomeItemComponent } from './portfolio-home-base/portfolio-home-wrapper/portfolio-home-item/portfolio-home-item.component';
import { PortfolioIntroductionComponent } from './portfolio-home-base/portfolio-home-wrapper/portfolio-home-component-collection/portfolio-introduction/portfolio-introduction.component';
import { PortfolioProjectsComponent } from './portfolio-home-base/portfolio-home-wrapper/portfolio-home-component-collection/portfolio-projects/portfolio-projects.component';
import { PortfolioSkillsComponent } from './portfolio-home-base/portfolio-home-wrapper/portfolio-home-component-collection/portfolio-skills/portfolio-skills.component';
import { PortfolioContactComponent } from './portfolio-home-base/portfolio-home-wrapper/portfolio-home-component-collection/portfolio-contact/portfolio-contact.component';
import { PortfolioResumeBaseComponent } from './portfolio-resume-base/portfolio-resume-base.component';
import { PortfolioHomeRoutingModule } from './portfolio-home-routing.module';
import { PortfolioHomeWrapperComponent } from './portfolio-home-base/portfolio-home-wrapper/portfolio-home-wrapper.component';
import { PortfolioHomeItemTemplateComponent } from './portfolio-home-base/portfolio-home-item-template/portfolio-home-item-template.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { PortfolioNamePipe } from 'src/app/shared/pipes/portfolio-name.pipe';
import { PortfolioDateMonthPipe } from 'src/app/shared/pipes/portfolio-date.pipe';
import { PortfolioLoadingComponent } from 'src/app/components/common/portfolio-loading/portfolio-loading.component';

@NgModule({
  declarations: [
    PortfolioHomeBaseComponent,
    PortfolioHomeItemComponent,
    PortfolioIntroductionComponent,
    PortfolioProjectsComponent,
    PortfolioSkillsComponent,
    PortfolioContactComponent,
    PortfolioResumeBaseComponent,
    PortfolioHomeWrapperComponent,
    PortfolioHomeItemTemplateComponent,
    PortfolioNamePipe,
    PortfolioDateMonthPipe,
    PortfolioLoadingComponent
  ],
  imports: [
    CommonModule,
    PortfolioHomeRoutingModule,
    FontAwesomeModule
  ],
  entryComponents: [
    PortfolioIntroductionComponent,
    PortfolioProjectsComponent,
    PortfolioSkillsComponent,
    PortfolioContactComponent
  ]
})
export class PortfolioHomeModule {
  constructor(faLibrary: FaIconLibrary) {
    faLibrary.addIconPacks(fas);
    faLibrary.addIconPacks(far);
    faLibrary.addIconPacks(fab);
  }
}
