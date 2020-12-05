import { NgModule } from '@angular/core'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule } from '@ngrx/router-store'

import { environment } from '@environments/environment'

import * as fromIndex from '.'
import { AppRouterSerializer } from './router-serializer'

const IMPORTS = [
  StoreModule.forRoot(fromIndex.reducers, { metaReducers: fromIndex.metaReducers }),
  EffectsModule.forRoot(fromIndex.EFFECTS),
  StoreRouterConnectingModule.forRoot({ stateKey: fromIndex.ROUTER_FEATURE, serializer: AppRouterSerializer }),
  !environment.production ? StoreDevtoolsModule.instrument({
    name: fromIndex.STORE_NAME,
    logOnly: environment.production
  }) : []
]

@NgModule({
  imports: [...IMPORTS]
})
export class AppStateModule { }
