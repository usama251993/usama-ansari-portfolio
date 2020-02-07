import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioStringsService {

  appStrings = {};

  constructor() {
    this.initAppStrings();
  }

  initAppStrings(): void {
    this.appStrings['homeComponent'] = {};
    this.appStrings['homeComponent']['views'] = [
      { name: 'Introduction' },
      { name: 'projects' }
    ];
    this.appStrings['homeComponent']['greetingText'] = 'Hi! I am';
    this.appStrings['homeComponent']['fullName'] = '';
    this.appStrings['homeComponent']['description'] = {};
    this.appStrings['homeComponent']['description']['question'] = 'What do I do?';
    this.appStrings['homeComponent']['description']['short'] = 'I design pages, which users would like to play with';
    this.appStrings['homeComponent']['scrollForMore'] = 'Scroll for more';
    this.appStrings['homeComponent']['button'] = {};
    this.appStrings['homeComponent']['button']['viewProject'] = 'Details';

  }

}
