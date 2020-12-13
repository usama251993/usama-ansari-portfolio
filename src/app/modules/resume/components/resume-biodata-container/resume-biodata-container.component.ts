import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { ResumeBiodataModel } from '@resume/models/resume-biodata.model'
import { ResumeBiodataService } from '@resume/services/resume-biodata/resume-biodata.service'

@Component({
  selector: 'app-resume-biodata-container',
  template: `<app-resume-biodata [biodata] = "biodata$ | async"></app-resume-biodata>`
})
export class ResumeBiodataContainerComponent implements OnInit {

  // assets$: Observable<ResumeBiodataAssetsModel>
  biodata$: Observable<ResumeBiodataModel>

  constructor(
    private _biodataService: ResumeBiodataService
  ) { }

  ngOnInit(): void {
    // this._biodataService.fetchAssets()
    // this.assets$ = this._biodataService.watchAssets$()

    this._biodataService.fetchBiodata()
    this.biodata$ = this._biodataService.watchBiodata$()
  }

}
