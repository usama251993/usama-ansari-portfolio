import { createFeatureSelector, createSelector } from '@ngrx/store'

import * as fromIndex from '../'
import * as fromReducer from '../reducers/navbar.reducer'

const NAVBAR_ASSET_STATE = createFeatureSelector(fromIndex.FEATURE_NAME)

export const NAVBAR_ASSET_SELECTOR = createSelector(
  NAVBAR_ASSET_STATE,
  (_: fromIndex.State) => fromReducer.SELECT_ENTITES(_.navbar)
)
