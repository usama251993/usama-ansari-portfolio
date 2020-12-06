import { Component, Input, OnInit } from '@angular/core'
import { ResumeBiodataAssetsModel, ResumeBiodataModel, INITIAL_BIODATA_ASSETS_MODEL, INITIAL_BIODATA_MODEL } from '@resume/models/resume-biodata.model'
import { BehaviorSubject } from 'rxjs'


@Component({
  selector: 'app-resume-biodata',
  templateUrl: './resume-biodata.component.html',
  styleUrls: ['./resume-biodata.component.scss']
})
export class ResumeBiodataComponent implements OnInit {

  private _assets$: BehaviorSubject<ResumeBiodataAssetsModel> = new BehaviorSubject<ResumeBiodataAssetsModel>(INITIAL_BIODATA_ASSETS_MODEL)
  private _biodata$: BehaviorSubject<ResumeBiodataModel> = new BehaviorSubject<ResumeBiodataModel>(INITIAL_BIODATA_MODEL)

  @Input()
  set assets(value: ResumeBiodataAssetsModel) { this._assets$.next(value) }
  get assets(): ResumeBiodataAssetsModel { return this._assets$.getValue() }

  @Input()
  set biodata(value: ResumeBiodataModel) { this._biodata$.next(value) }
  get biodata(): ResumeBiodataModel { return this._biodata$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
