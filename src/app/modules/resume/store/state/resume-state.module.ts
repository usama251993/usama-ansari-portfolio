import { NgModule } from '@angular/core'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import * as fromFeatureState from '.'

const IMPORTS = [
  StoreModule.forFeature(fromFeatureState.FEATURE, fromFeatureState.reducers),
  EffectsModule.forFeature(fromFeatureState.FEATURE_EFFECTS)
]

const EXPORTS = [
  StoreModule, EffectsModule
]

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS]
})
export class ResumeStateModule { }
