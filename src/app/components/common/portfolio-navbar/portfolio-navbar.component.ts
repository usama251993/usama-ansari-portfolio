import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';

import { PortfolioAssetsService } from 'src/app/services/portfolio-assets.service';
import { IPortfolioNavbarModel } from 'src/app/shared/models/navbar/master/portfolio-navbar.model';
import { IPortfolioNavbarContentModel } from 'src/app/shared/models/navbar/children/portfolio-navbar-assets/portfolio-navbar-content/portfolio-navbar-content.model';

@Component({
  selector: 'app-portfolio-navbar',
  templateUrl: './portfolio-navbar.component.html',
  styleUrls: ['./portfolio-navbar.component.scss']
})
export class PortfolioNavbarComponent implements OnInit {

  // Navbar Model
  oNavbar: IPortfolioNavbarModel;

  // Subject to listen to changes in oNavbar.state.bIsActive
  // and modify this.oNavbar.triggers[0|1].show accordingly
  mySubject: BehaviorSubject<boolean>;

  // Data from <app-component>
  @Input() oNavbarContentsBind$: Observable<string>;

  constructor(
    private breakPoint: BreakpointObserver,
    private assetsService: PortfolioAssetsService
  ) { }

  ngOnInit(): void {
    this.initNavbarContents();
    this.initResponsiveNavbar();
  }

  // To handle responsiveness of navbar
  // viewport width <= 600px collapse
  // viewport width >  600px expand

  initResponsiveNavbar(): void {
    this.mySubject = new BehaviorSubject(this.oNavbar.state.bIsActive);
    this.mySubject.subscribe((bIsActive: boolean) => {
      this.oNavbar.triggers[0].show = !bIsActive;
      this.oNavbar.triggers[1].show = bIsActive;
    });
    this.breakPoint.observe([Breakpoints.XSmall]).subscribe((state: BreakpointState) => {

      // Uncomment if navbar needs to be closed when switched
      // from a narrow viewport to a wide viewport
      // this.oNavbar.state.bIsActive = false;

      this.mySubject.next(this.oNavbar.state.bIsActive);
      state.matches ? this.oNavbar.state.bIsMobile = true : this.oNavbar.state.bIsMobile = false;
    });
  }

  // To handle open / close of navbar
  toggleNavbar(bIsActive: boolean): void {
    this.oNavbar.state.bIsActive = !bIsActive;
    this.mySubject.next(this.oNavbar.state.bIsActive);
  }

  // To initiate navbar object
  // contains the following data
  // 1. navbar buttons
  // 2. navbar icons
  // 3. route

  initNavbarContents(): void {
    this.oNavbar = this.assetsService.oNavbar;
    this.oNavbarContentsBind$.subscribe((routerURL: string) => {
      let routerURLSegment: string = routerURL.split('/').filter((splitString) => splitString !== '')[0];
      this.oNavbar.contents = this.assetsService.getContextualNavbarElements(routerURLSegment);
      this.oNavbar.state.bHasIcons = this.oNavbar.contents.every((navbarContent: IPortfolioNavbarContentModel) => navbarContent.hasOwnProperty('icon')) ? true : false;
    });
  }

  // To handle page navigation
  navigateTo(navbarContent: any): void {
    // navigateTo(navbarContent: INavbarContent): void {
    // this.navbarState.bIsActive = false;
    // this.router.navigate(['/', navbarContent.detail.clickAction], { relativeTo: this.route });
  }

}
