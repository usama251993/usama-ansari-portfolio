import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { ResumeBiodataModel, INITIAL_RESUME_BIODATA } from '@resume/models/resume-biodata.model'
import { ResumeCoreService } from '../resume-core.service'
import { ResumeBiodataComponentStore } from '@resume/store/component-store/resume-biodata/resume-biodata.component-store'

@Injectable({
  providedIn: 'root'
})
export class ResumeBiodataService {

  private _biodata$: BehaviorSubject<ResumeBiodataModel> = new BehaviorSubject<ResumeBiodataModel>(INITIAL_RESUME_BIODATA)
  private _biodata: ResumeBiodataModel

  constructor(
    private _coreService: ResumeCoreService,
    // private _componentStore: ResumeBiodataComponentStore
  ) {
    this._biodata = {
      photo: {
        src: 'assets/media/images/usama-mini.jpg',
        alt: 'Usama Ansari'
      },
      about: {
        name: {
          first: 'Usama', last: 'Ansari'
        },
        title: 'Angular Developer',
        about: 'Big fan of Angular, Git, RxJS and GCP'
      },
      stack: {
        name: 'MEAN',
        technologies: [
          {
            name: 'Angular 11',
            icon: {
              src: 'assets/media/brand-images/biodata/angular.svg',
              alt: 'Angular 11'
            }
          },
          {
            name: 'NodeJS',
            icon: {
              src: 'assets/media/brand-images/biodata/nodejs.svg',
              alt: 'NodeJS'
            }
          },
          {
            name: 'D3.js',
            icon: {
              src: 'assets/media/brand-images/biodata/d3.png',
              alt: 'D3.js'
            }
          },
          {
            name: 'Google Cloud Platform',
            icon: {
              src: 'assets/media/brand-images/biodata/gcp.png',
              alt: 'GCP'
            }
          },
          {
            name: 'Firebase',
            icon: {
              src: 'assets/media/brand-images/biodata/firebase.svg',
              alt: 'Firebase'
            }
          },
          {
            name: 'Git',
            icon: {
              src: 'assets/media/brand-images/biodata/git.svg',
              alt: 'Git'
            }
          }
        ]
      }
      // descriptions: [
      //   "Front end expert having 4 years of work experience",
      //   "Proficient with front end development skills like HTML, CSS and JavaScript",
      //   "Experienced in working with Angular 2+ framework along with Material Design and RxJS",
      //   "Familiar with Google Cloud Platform",
      //   "Practiced source control management in Git and Tortoise SVN",
      //   "Keenly interested in design and development of client side webpages"
      // ]
      // name: {
      //   first: 'Usama', last: 'Ansari'
      // },
      // about: 'I can make things on the web, be it business pages or sometimes humor!',
      // title: 'Angular Developer'
    }
  }

  fetchBiodata(): ResumeBiodataModel {
    return this._biodata
  }
}
