import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioErrorComponent } from './components/common/portfolio-error/portfolio-error.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/portfolio-home/portfolio-home.module').then(myModule => myModule.PortfolioHomeModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./modules/portfolio-social/portfolio-social.module').then(myModule => myModule.PortfolioSocialModule)
  },
  {
    path: 'interests',
    loadChildren: () => import('./modules/portfolio-interests/portfolio-interests.module').then(myModule => myModule.PortfolioInterestsModule)
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
