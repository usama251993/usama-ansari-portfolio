import { Injectable } from '@angular/core'

import { ComponentStore } from '@ngrx/component-store'

import { Observable } from 'rxjs'

import { ResumeBiodataModel, INITIAL_RESUME_BIODATA } from '@resume/models/resume-biodata.model'

@Injectable()
export class ResumeBiodataComponentStore extends ComponentStore<ResumeBiodataModel> {

  constructor() {
    super({ ...INITIAL_RESUME_BIODATA })
  }

  readonly getBiodata$: Observable<ResumeBiodataModel> = this.select(_ => _)
  readonly setBiodata = this.updater((state: ResumeBiodataModel, value: ResumeBiodataModel) => ({ ...state, ...value }))

}
