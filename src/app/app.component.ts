import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  oNavbarContents$: Observable<string>;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title = 'Usama Ansari';

    this.oNavbarContents$ = this.router.events.pipe(
      filter((routerEvent: RouterEvent) => routerEvent instanceof NavigationEnd),
      map((filterData: NavigationEnd) => filterData.url),
    )
  }

}
