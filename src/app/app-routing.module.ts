import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioHomeComponent } from './components/portfolio-home/portfolio-home.component';
import { PortfolioAboutComponent } from './components/portfolio-home/portfolio-about/portfolio-about.component';
import { PortfolioProfileDocumentsComponent } from './components/portfolio-home/portfolio-profile-documents/portfolio-profile-documents.component';
import { PortfolioProjectsComponent } from './components/portfolio-home/portfolio-projects/portfolio-projects.component';
import { PortfolioErrorComponent } from './components/portfolio-error/portfolio-error.component';
import { PortfolioMeterComponent } from './components/portfolio-home/portfolio-about/portfolio-meter/portfolio-meter.component';


const routes: Routes = [
  {
    path: 'home',
    component: PortfolioHomeComponent,
    children: [
      {
        path: '',
        component: PortfolioAboutComponent,
        pathMatch: 'full'
      },
      {
        path: 'documents',
        component: PortfolioProfileDocumentsComponent
      },
      {
        path: 'projects',
        component: PortfolioProjectsComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Temporary route
  {
    path: 'meter',
    component: PortfolioMeterComponent
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
