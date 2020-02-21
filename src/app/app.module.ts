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

import { PortfolioErrorComponent } from './components/common/portfolio-error/portfolio-error.component';
import { PortfolioNavbarComponent } from './components/common/portfolio-navbar/portfolio-navbar.component';
import { PortfolioScrollbarComponent } from './components/common/portfolio-scrollbar/portfolio-scrollbar.component';

import { PortfolioCoreService } from './services/portfolio-core.service';
import { PortfolioAssetsService } from './services/portfolio-assets.service';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioErrorComponent,
    PortfolioNavbarComponent,
    PortfolioScrollbarComponent
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
    PortfolioAssetsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule {
  constructor(faLibrary: FaIconLibrary) {
    faLibrary.addIconPacks(fas);
    faLibrary.addIconPacks(far);
    faLibrary.addIconPacks(fab);
  }
}
