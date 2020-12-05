import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import * as fromIndex from '.'

const IMPORTS = [
  StoreModule.forFeature(fromIndex.FEATURE_NAME, fromIndex.REDUCERS, { metaReducers: fromIndex.META_REDUCERS }),
  EffectsModule.forFeature([...fromIndex.EFFECTS])
]

const EXPORTS = [
  StoreModule,
  EffectsModule
]

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS]
})

export class CoreStateModule { }
