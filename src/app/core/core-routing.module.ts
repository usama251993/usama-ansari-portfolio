import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CORE_ROUTES } from './core.routes'
import { AppShellComponent } from './components/shell/shell.component'

const routes: Routes = [
  {
    path: CORE_ROUTES.EMPTY,
    component: AppShellComponent,
    children: [
      {
        path: CORE_ROUTES.EMPTY,
        loadChildren: () => import('@home/home.module').then(_ => _.HomeModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
