import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { ResumeBiodataAssetsModel, ResumeBiodataModel, INITIAL_BIODATA_ASSETS_MODEL, INITIAL_BIODATA_MODEL } from '@resume/models/resume-biodata.model'
import { ResumeCoreService } from '../resume-core.service'

@Injectable({
  providedIn: 'root'
})
export class ResumeBiodataService {

  private _assets$: BehaviorSubject<ResumeBiodataAssetsModel> = new BehaviorSubject<ResumeBiodataAssetsModel>(INITIAL_BIODATA_ASSETS_MODEL)
  private _biodata$: BehaviorSubject<ResumeBiodataModel> = new BehaviorSubject<ResumeBiodataModel>(INITIAL_BIODATA_MODEL)

  private _assets: ResumeBiodataAssetsModel
  private _biodata: ResumeBiodataModel

  constructor(
    private _coreService: ResumeCoreService
  ) {
    this._assets = {

    }

    this._biodata = {
      photo: {
        src: 'assets/media/images/usama-mini.jpg',
        alt: 'Usama Ansari'
      },
      // descriptions: [
      //   "Front end expert having 4 years of work experience",
      //   "Proficient with front end development skills like HTML, CSS and JavaScript",
      //   "Experienced in working with Angular 2+ framework along with Material Design and RxJS",
      //   "Familiar with Google Cloud Platform",
      //   "Practiced source control management in Git and Tortoise SVN",
      //   "Keenly interested in design and development of client side webpages"
      // ]
      name: {
        first: 'Usama', last: 'Ansari'
      },
      about: 'I can make things on the web, be it business pages or sometimes humor!',
      title: 'Angular Developer'
    }
  }

  fetchAssets(): void {
    this._assets$.next(this._assets)
  }

  watchAssets$(): Observable<ResumeBiodataAssetsModel> {
    return this._assets$.asObservable()
  }

  fetchBiodata(): void {
    this._biodata$.next(this._biodata)
  }

  watchBiodata$(): Observable<ResumeBiodataModel> {
    return this._biodata$.asObservable()
  }
}
