import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppFireModule } from './modules/fire/fire.module'
import { AppStateModule } from './modules/state/state.module'

const DECLARATIONS = []

const IMPORTS = [
  AppFireModule,
  AppStateModule,
  HttpClientModule
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  exports: [...IMPORTS]
})
export class AppSharedModule { }
