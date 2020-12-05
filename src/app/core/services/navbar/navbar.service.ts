import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { INITIAL_ASSETS_MODEL, NavbarAssetsModel } from '../../models/navbar.model'
import {CoreService} from '../core.service'

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private _navbarAssets$: BehaviorSubject<NavbarAssetsModel> = new BehaviorSubject<NavbarAssetsModel>(INITIAL_ASSETS_MODEL)

  private _assetsDict: { [key: string]: NavbarAssetsModel }

  constructor(
    private _coreService: CoreService
  ) {
    this._assetsDict = {
      common: {
        id: 'common',
        items: [
          {
            icon: null,
            label: 'Login'
          },
          {
            icon: null,
            label: 'Signup'
          }
        ]
      },
      core: {
        id: 'core',
        items: [
          {
            icon: null,
            label: 'Home'
          }
        ]
      }
    }
  }

  fetchNavbarAssets(_: string): void {
    this._navbarAssets$.next(
      {
        id: _,
        items: [
          ...this._assetsDict['common'].items,
          ...this._assetsDict[_].items
        ]
      }
    )
  }

  watchNavbarAssets$(_: { moduleName: string }): Observable<NavbarAssetsModel> {
    this.fetchNavbarAssets(_.moduleName)
    return this._navbarAssets$.asObservable()
  }
}
