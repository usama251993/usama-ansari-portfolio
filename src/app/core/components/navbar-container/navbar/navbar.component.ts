import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { NavbarAssetsModel } from '@core/models/navbar/navbar.model'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  private _assets$: BehaviorSubject<NavbarAssetsModel> = new BehaviorSubject<NavbarAssetsModel>(null)

  @Input()
  set assets(value: NavbarAssetsModel) { this._assets$.next(value) }
  get assets(): NavbarAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void {
    this._assets$.subscribe(_ => { console.log(_) })
  }

}
