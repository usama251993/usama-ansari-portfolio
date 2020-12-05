import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-error-container',
  template: `<app-error [error] = "error$ | async"></app-error>`
})
export class ErrorContainerComponent implements OnInit {

  error$: Observable<any>

  constructor() { }

  ngOnInit(): void { }

}
