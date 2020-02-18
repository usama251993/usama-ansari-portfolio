import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material/app-material.module';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { PortfolioHomeComponent } from './components/portfolio-home/portfolio-home.component';
import { PortfolioAboutComponent } from './components/portfolio-about/portfolio-about.component';
import { PortfolioProfileDocumentsComponent } from './components/portfolio-profile-documents/portfolio-profile-documents.component';
import { PortfolioWorkExperienceComponent } from './components/portfolio-about/portfolio-work-experience/portfolio-work-experience.component';
import { PortfolioMeterComponent } from './components/common/portfolio-meter/portfolio-meter.component';
import { PortfolioCertificationsComponent } from './components/portfolio-about/portfolio-certifications/portfolio-certifications.component';
import { PortfolioMiscellaneousComponent } from './components/portfolio-about/portfolio-miscellaneous/portfolio-miscellaneous.component';
import { PortfolioErrorComponent } from './components/common/portfolio-error/portfolio-error.component';
import { PortfolioLoadingComponent } from './components/common/portfolio-loading/portfolio-loading.component';
import { PortfolioNavbarComponent } from './components/common/portfolio-navbar/portfolio-navbar.component';
import { PortfolioIntroductionComponent } from './components/portfolio-home/portfolio-introduction/portfolio-introduction.component';
import { PortfolioContactComponent } from './components/portfolio-home/portfolio-contact/portfolio-contact.component';
import { PortfolioProjectsComponent } from './components/portfolio-home/portfolio-projects/portfolio-projects.component';
import { PortfolioSkillsComponent } from './components/portfolio-home/portfolio-skills/portfolio-skills.component';
import { PortfolioHomeTemplateComponent } from './components/common/portfolio-home-template/portfolio-home-template.component';

import { PortfolioCoreService } from './services/portfolio-core.service';
import { PortfolioDataService } from './services/portfolio-data.service';
import { PortfolioAssetsService } from './services/portfolio-assets.service';

import { PortfolioDateMonthPipe } from './shared/pipes/portfolio-date.pipe';
import { PortfolioNamePipe } from './shared/pipes/portfolio-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioHomeComponent,
    PortfolioProjectsComponent,
    PortfolioAboutComponent,
    PortfolioProfileDocumentsComponent,
    PortfolioErrorComponent,
    PortfolioMeterComponent,
    PortfolioWorkExperienceComponent,
    PortfolioSkillsComponent,
    PortfolioCertificationsComponent,
    PortfolioMiscellaneousComponent,
    PortfolioDateMonthPipe,
    PortfolioNamePipe,
    PortfolioLoadingComponent,
    PortfolioNavbarComponent,
    PortfolioIntroductionComponent,
    PortfolioContactComponent,
    PortfolioHomeTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    PortfolioCoreService,
    PortfolioDataService,
    PortfolioAssetsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PortfolioIntroductionComponent,
    PortfolioProjectsComponent,
    PortfolioSkillsComponent,
    PortfolioContactComponent
  ]
})
export class AppModule {
  constructor(faLibrary: FaIconLibrary) {
    faLibrary.addIconPacks(fas);
    faLibrary.addIconPacks(far);
    faLibrary.addIconPacks(fab);
  }
}
