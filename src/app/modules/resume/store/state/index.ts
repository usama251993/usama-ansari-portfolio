import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store'

import { EFFECTS } from './effects'

import * as fromResume from './reducers/resume.reducer'

export interface State {
  resume: fromResume.State
}

export const META_REDUCERS: MetaReducer<State>[] = []
export const reducers: ActionReducerMap<State, Action> = {
  resume: fromResume.reducer
}

export const FEATURE: string = 'resume'

export const FEATURE_EFFECTS = [...EFFECTS]
