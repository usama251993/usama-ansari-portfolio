import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioSocialComponent } from './portfolio-social/portfolio-social.component';
import { PortfolioSocialRoutingModule } from './portfolio-social-routing.module';



@NgModule({
  declarations: [PortfolioSocialComponent],
  imports: [
    CommonModule,
    PortfolioSocialRoutingModule
  ]
})
export class PortfolioSocialModule { }
