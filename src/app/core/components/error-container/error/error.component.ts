import { Component, Input, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import{INITIAL_ERROR_MODEL} from '@shared/models/common/error/error.model'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  private _error$: BehaviorSubject<any> = new BehaviorSubject<any>(INITIAL_ERROR_MODEL)

  @Input()
  set error(value: any) { this._error$.next(value) }
  get error(): any { return this._error$.getValue() }

  constructor() { }

  ngOnInit(): void {
  }

}
