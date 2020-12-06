import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ResumeRoutingModule } from './resume-routing.module'
import { ResumeMaterialModule } from './resume-material.module'

import { ResumeShellContainerComponent } from './components/resume-shell-container/resume-shell-container.component'
import { ResumeShellComponent } from './components/resume-shell-container/resume-shell/resume-shell.component'
import { ResumeBiodataContainerComponent } from './components/resume-biodata-container/resume-biodata-container.component'
import { ResumeBiodataComponent } from './components/resume-biodata-container/resume-biodata/resume-biodata.component'
import { ResumeProjectContainerComponent } from './components/resume-project-container/resume-project-container.component'
import { ResumeProjectComponent } from './components/resume-project-container/resume-project/resume-project.component'
import { ResumeSkillContainerComponent } from './components/resume-skill-container/resume-skill-container.component'
import { ResumeSkillComponent } from './components/resume-skill-container/resume-skill/resume-skill.component'

const DECLARATIONS = [
  ResumeShellContainerComponent, ResumeShellComponent,
  ResumeBiodataContainerComponent, ResumeBiodataComponent,
  ResumeProjectContainerComponent, ResumeProjectComponent,
  ResumeSkillContainerComponent, ResumeSkillComponent
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    ResumeMaterialModule
  ]
})
export class ResumeModule { }
