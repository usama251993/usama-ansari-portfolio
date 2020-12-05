import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppMaterialModule } from '@shared/modules/material/material.module'

import { AppCoreRoutingModule } from './core-routing.module'
import { CoreStateModule } from './state/core-state.module'

import { AppShellComponent } from './components/shell/shell.component'
import { AppNavbarContainerComponent } from './components/navbar-container/navbar-container.component'
import { AppNavbarComponent } from './components/navbar-container/navbar/navbar.component';
import { ErrorContainerComponent } from './components/error-container/error-container.component';
import { ErrorComponent } from './components/error-container/error/error.component'


const DECLARATIONS = [
  AppShellComponent,
  AppNavbarContainerComponent, AppNavbarComponent
]

const IMPORTS = [
  CommonModule,
  AppCoreRoutingModule,
  AppMaterialModule,
  CoreStateModule
]

@NgModule({
  declarations: [...DECLARATIONS, ErrorContainerComponent, ErrorComponent],
  imports: [...IMPORTS]
})
export class AppCoreModule { }
