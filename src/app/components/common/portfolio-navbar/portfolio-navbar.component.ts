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

  toggleNavbar(): void {
    this.navbarState.bIsActive = !this.navbarState.bIsActive;
  }

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
          content: 'about',
          clickAction: 'about'
        }
      },
      {
        icon: {
          prefix: 'fas',
          name: 'phone',
          transform: {
            size: 'lg',
            rotate: '90'
          }
        },
        detail: {
          content: 'connect',
          clickAction: 'contact'
        }
      }
    ]
  }

  navigateTo(navbarContent: PortfolioContactModel): void {
    this.navbarState.bIsActive = false;
    this.router.navigate(['/', navbarContent.detail.clickAction], { relativeTo: this.route });
  }

}
