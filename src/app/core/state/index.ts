import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store'

import { CORE_EFFECTS } from './effects'

import * as fromNavbar from './reducers/navbar.reducer'

export interface State {
  navbar: fromNavbar.State
}

export const META_REDUCERS: MetaReducer<State>[] = []
export const REDUCERS: ActionReducerMap<State, Action> = {
  navbar: fromNavbar.reducer
}

export const FEATURE_NAME: string = 'core'

export const EFFECTS = [...CORE_EFFECTS]
