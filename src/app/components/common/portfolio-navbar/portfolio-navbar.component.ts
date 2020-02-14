import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

import { PortfolioContactModel } from 'src/app/shared/models/children/portfolio-profile/portfolio-contact/portfolio-contact.model';

interface NavbarState {
  bIsActive: boolean,
  bIsMobile: boolean
}

@Component({
  selector: 'app-portfolio-navbar',
  templateUrl: './portfolio-navbar.component.html',
  styleUrls: ['./portfolio-navbar.component.scss']
})
export class PortfolioNavbarComponent implements OnInit {

  navbarState: NavbarState = null;
  navbarContents: PortfolioContactModel[] = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breakPoint: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.initResponsiveNavbar();
    this.initNavbarContents();
  }

  // To handle responsiveness of navbar
  // viewport width <  600px collapse
  // viewport width >= 600px expand

  initResponsiveNavbar(): void {
    this.navbarState = {
      bIsActive: false,
      bIsMobile: false
    };

    this.breakPoint.observe([Breakpoints.XSmall]).subscribe((state: BreakpointState) => {
      this.navbarState.bIsActive = false;
      state.matches ? this.navbarState.bIsMobile = true : this.navbarState.bIsMobile = false;
    });
  }

  // To handle open / close of navbar
  toggleNavbar(): void {
    this.navbarState.bIsActive = !this.navbarState.bIsActive;
  }

  // To initiate navbar object
  // contains the following data
  // 1. navbar buttons
  // 2. navbar icons
  // 3. route

  initNavbarContents(): void {
    this.navbarContents = [
      {
        icon: {
          prefix: 'fas',
          name: 'home',
          transform: {
            size: 'lg'
          }
        },
        detail: {
          content: 'home',
          clickAction: 'home'
        }
      },
      {
        icon: {
          prefix: 'far',
          name: 'address-card',
          transform: {
            size: 'lg'
          }
        },
        detail: {
          content: 'resume',
          clickAction: 'about'
        }
      },
      {
        icon: {
          prefix: 'fas',
          name: 'icons',
          transform: {
            size: 'lg',
          }
        },
        detail: {
          content: 'interests',
          clickAction: 'interests'
        }
      }
    ];
  }

  // To handle page navigation
  navigateTo(navbarContent: PortfolioContactModel): void {
    this.navbarState.bIsActive = false;
    this.router.navigate(['/', navbarContent.detail.clickAction], { relativeTo: this.route });
  }

}
