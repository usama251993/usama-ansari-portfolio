import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'

import { ResumeActions } from '../actions/resume.action'
import { ResumeTypes } from '../types/resume.type'

export interface State extends EntityState<{}> { }

const ADAPTER: EntityAdapter<{}> = createEntityAdapter()

const INITIAL_STATE: State = ADAPTER.getInitialState()

export function reducer(
  state: State = INITIAL_STATE,
  action: ResumeActions
): State {
  switch (action.type) {
    case ResumeTypes.EMPTY:
    default:
      return state
  }
}
