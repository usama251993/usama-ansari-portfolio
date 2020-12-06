import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { retry } from 'rxjs/operators'

import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/endpoint/app-endpoint.model'

@Injectable({
  providedIn: 'root'
})
export class AppEndpointService {

  constructor(
    private _http: HttpClient
  ) { }

  triggerHTTPPostRequest(_: { endpoint: string, reqBody: AppEndpointRequestModel }): Observable<AppEndpointResponseModel> {
    return this._http.post<AppEndpointResponseModel>(_.endpoint, _.reqBody).pipe(retry(1))
  }

}
