import { Injectable } from '@angular/core'

import { Actions, Effect, ofType } from '@ngrx/effects'

import { catchError, map, switchMap } from 'rxjs/operators'

import * as fromNavbarActions from '../actions/navbar.action'
import { CORE_ACTIONS } from '../types/navbar.type'

import { NavbarService } from '../../services/navbar/navbar.service'

@Injectable()
export class NavbarEffects {

  constructor(
    private _actions$: Actions,
    private _navbarService: NavbarService
  ) { }

  @Effect({ dispatch: true })
  _eLoadAssets$ = this._actions$.pipe(
    ofType<fromNavbarActions.NavbarActions>(CORE_ACTIONS.LOAD_NAVBAR_ASSETS),
    switchMap(_ => this._navbarService.watchNavbarAssets$(<{ moduleName: string }>_.payload).pipe(
      map(assets => new fromNavbarActions.NavbarLoadAssetsSuccessAction({ assets })),
      catchError(assets => {
        console.log(assets)
        return [new fromNavbarActions.NavbarLoadAssetsFailAction({ assets })]
      })
    ))
  )

}
