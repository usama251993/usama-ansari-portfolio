import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { NavbarAssetsModel } from '../../models/navbar/navbar.model'

import * as fromNavbarActions from '../actions/navbar.action'
import { CORE_ACTIONS } from '../types/navbar.type'


export interface State extends EntityState<NavbarAssetsModel> { }

const _ADAPTER: EntityAdapter<NavbarAssetsModel> = createEntityAdapter<NavbarAssetsModel>()

const INITIAL_STATE: State = _ADAPTER.getInitialState({})

export function reducer(
  state: State = INITIAL_STATE,
  action: fromNavbarActions.NavbarActions
): State {
  switch (action.type) {
    case CORE_ACTIONS.NAVBAR_ASSETS_SUCCESS:
      return _ADAPTER.upsertOne((<{ assets: NavbarAssetsModel }>action.payload).assets, state)
    case CORE_ACTIONS.NAVBAR_ASSETS_FAILED:
      return _ADAPTER.addOne(null, state)
    default:
      return { ...state }
  }
}

const { selectEntities, selectIds, selectAll, selectTotal } = _ADAPTER.getSelectors()

export const SELECT_ENTITES = selectEntities
export const SELECT_IDS = selectIds
export const SELECT_ALL = selectAll
export const SELECT_TOTAL = selectTotal
