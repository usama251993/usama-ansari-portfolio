import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ResumeRoutingModule } from './resume-routing.module'
import { ResumeMaterialModule } from './resume-material.module'
import { ResumeStateModule } from './store/state/resume-state.module'

import { ResumeShellContainerComponent } from './components/resume-shell-container/resume-shell-container.component'
import { ResumeShellComponent } from './components/resume-shell-container/resume-shell/resume-shell.component'

import { ResumeBiodataContainerComponent } from './components/resume-biodata-container/resume-biodata-container.component'
import { ResumeBiodataComponent } from './components/resume-biodata-container/resume-biodata/resume-biodata.component'

import { ResumeProjectContainerComponent } from './components/resume-project-container/resume-project-container.component'
import { ResumeProjectComponent } from './components/resume-project-container/resume-project/resume-project.component'

import { ResumeSkillContainerComponent } from './components/resume-skill-container/resume-skill-container.component'
import { ResumeSkillComponent } from './components/resume-skill-container/resume-skill/resume-skill.component'

import { ResumeContactContainerComponent } from './components/resume-contact-container/resume-contact-container.component'
import { ResumeContactComponent } from './components/resume-contact-container/resume-contact/resume-contact.component'

const DECLARATIONS = [
  ResumeShellContainerComponent, ResumeShellComponent,
  ResumeBiodataContainerComponent, ResumeBiodataComponent,
  ResumeContactContainerComponent, ResumeContactComponent,
  ResumeProjectContainerComponent, ResumeProjectComponent,
  ResumeSkillContainerComponent, ResumeSkillComponent
]

const IMPORTS = [
  CommonModule,
  ResumeRoutingModule,
  ResumeMaterialModule,
  ResumeStateModule
]
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
})
export class ResumeModule { }
