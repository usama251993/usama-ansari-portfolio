import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { ResumeBiodataModel } from '@resume/models/resume-biodata.model'
import { ResumeBiodataService } from '@resume/services/resume-biodata/resume-biodata.service'
import { ResumeBiodataComponentStore } from '@resume/store/component-store/resume-biodata/resume-biodata.component-store'

@Component({
  selector: 'app-resume-biodata-container',
  template: `<app-resume-biodata [biodata] = "biodata$ | async"></app-resume-biodata>`,
  providers: [ResumeBiodataComponentStore]
})
export class ResumeBiodataContainerComponent implements OnInit {

  biodata$: Observable<ResumeBiodataModel>

  constructor(
    private _biodataService: ResumeBiodataService,
    private _componentStore: ResumeBiodataComponentStore
  ) { }

  ngOnInit(): void {
    this._componentStore.setBiodata(this._biodataService.fetchBiodata())
    this.biodata$ = this._componentStore.getBiodata$
  }

}
