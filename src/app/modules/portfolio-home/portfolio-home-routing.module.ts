import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioHomeBaseComponent } from './portfolio-home-base/portfolio-home-base.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioHomeBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioHomeRoutingModule { }