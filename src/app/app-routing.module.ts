import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioHomeComponent } from './components/portfolio-home/portfolio-home.component';
import { PortfolioAboutComponent } from './components/portfolio-about/portfolio-about.component';
import { PortfolioProfileDocumentsComponent } from './components/portfolio-profile-documents/portfolio-profile-documents.component';
import { PortfolioErrorComponent } from './components/common/portfolio-error/portfolio-error.component';

const routes: Routes = [
  {
    path: 'home',
    component: PortfolioHomeComponent
    // children: [ ]
  },
  {
    path: 'about',
    component: PortfolioAboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'documents',
    component: PortfolioProfileDocumentsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: PortfolioErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
