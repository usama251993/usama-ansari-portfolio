import { Component, OnInit } from '@angular/core'
import { Dictionary } from '@ngrx/entity'

import { Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'

import { Store, select } from '@ngrx/store'
import { State } from '@core/state'
import * as fromNavbarActions from '@core/state/actions/navbar.action'
import { NAVBAR_ASSET_SELECTOR } from '@core/state/selectors/navbar.selector'

import { NavbarService } from '@core/services/navbar/navbar.service'
import { NavbarAssetsModel } from '@core/models/navbar/navbar.model'

@Component({
  selector: 'app-navbar-container',
  template: `<app-navbar [assets] = "assets$ | async"></app-navbar>`
})
export class AppNavbarContainerComponent implements OnInit {

  assets$: Observable<NavbarAssetsModel>

  constructor(
    private _store$: Store<State>
  ) { }

  ngOnInit(): void {
    this._store$.dispatch(new fromNavbarActions.NavbarLoadAssetsAction({ moduleName: 'core' }))
    this.assets$ = this._store$.pipe(
      select(NAVBAR_ASSET_SELECTOR),
      map(_ => _['core'])
    )
  }

}
