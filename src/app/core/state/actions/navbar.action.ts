import { Action } from '@ngrx/store'

import { CORE_ACTIONS } from '../types/navbar.type'

import { NavbarAssetsModel } from '../../models/navbar.model'

export class NavbarLoadAssetsAction implements Action {
  readonly type: string = CORE_ACTIONS.LOAD_NAVBAR_ASSETS
  constructor(public payload: { moduleName: string }) { }
}

export class NavbarLoadAssetsSuccessAction implements Action {
  readonly type: string = CORE_ACTIONS.NAVBAR_ASSETS_SUCCESS
  constructor(public payload: { assets: NavbarAssetsModel }) { }
}
export class NavbarLoadAssetsFailAction implements Action {
  readonly type: string = CORE_ACTIONS.NAVBAR_ASSETS_FAILED
  constructor(public payload: { assets: NavbarAssetsModel }) { }
}

export type NavbarActions =
  | NavbarLoadAssetsAction
  | NavbarLoadAssetsSuccessAction
  | NavbarLoadAssetsFailAction
