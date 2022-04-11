import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router'
import { RouterStateSerializer } from '@ngrx/router-store'

interface AppRouterSerializerModel {
  url: string
  params: Params
  queryParams: Params
}

export class AppRouterSerializer implements RouterStateSerializer<AppRouterSerializerModel> {
  serialize(routerState: RouterStateSnapshot) {
    const { url } = routerState
    let _route: ActivatedRouteSnapshot = routerState.root
    while (!!_route.firstChild) { _route = _route.firstChild }
    const { queryParams, data, params } = _route
    return { url, params, queryParams, data }
  }
}
