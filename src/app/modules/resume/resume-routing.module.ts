import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CORE_ROUTES } from './resume.routes'

import { ResumeShellContainerComponent } from './components/resume-shell-container/resume-shell-container.component'

const routes: Routes = [
  {
    path: CORE_ROUTES.EMPTY,
    component: ResumeShellContainerComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
