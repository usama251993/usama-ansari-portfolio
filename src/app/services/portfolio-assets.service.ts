import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioAssetsService {

  constructor() { }

  childViews: HTMLDivElement[] = [];

  scrollToNextView(currentView: HTMLDivElement): void {
    this.childViews[this.childViews.findIndex((element) => element === currentView) + 1].scrollIntoView({ behavior: 'smooth' });
  }

}
