import { HttpErrorResponse } from '@angular/common/http'

export interface AppEndpointRequestModel {

}

export interface AppEndpointResponseModel {
  status: number | null
  data: any | null
  error: HttpErrorResponse | null
}

export const INITIAL_ENDPOINT_REQUEST_MODEL: AppEndpointRequestModel = {}

export const INITIAL_ENDPOINT_RESPONSE_MODEL: AppEndpointResponseModel = {
  status: 0, data: null, error: null
}
