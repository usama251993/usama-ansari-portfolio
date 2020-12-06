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
        path: CORE_ROUTES.RESUME,
        loadChildren: () => import('@resume/resume.module').then(_ => _.ResumeModule)
      },
      {
        path: CORE_ROUTES.EMPTY,
        redirectTo: CORE_ROUTES.RESUME
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
