import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material/app-material.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { PortfolioHomeComponent } from './components/portfolio-home/portfolio-home.component';
import { PortfolioProjectsComponent } from './components/portfolio-home/portfolio-projects/portfolio-projects.component';
import { PortfolioAboutComponent } from './components/portfolio-home/portfolio-about/portfolio-about.component';
import { PortfolioProfileDocumentsComponent } from './components/portfolio-home/portfolio-profile-documents/portfolio-profile-documents.component';
import { PortfolioErrorComponent } from './components/portfolio-error/portfolio-error.component';

import { PortfolioCoreService } from './services/portfolio-core.service';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHomeComponent,
    PortfolioProjectsComponent,
    PortfolioAboutComponent,
    PortfolioProfileDocumentsComponent,
    PortfolioErrorComponent
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
    PortfolioCoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(faLibrary: FaIconLibrary) {
    faLibrary.addIconPacks(fas);
    faLibrary.addIconPacks(far);
    faLibrary.addIconPacks(fab);
  }
}
