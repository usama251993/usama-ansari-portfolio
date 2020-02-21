import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioCoreService {

  sResumeURL: string;

  constructor(private http: HttpClient) {
    this.sResumeURL = 'assets/data/resume-data.json';
  }

  handleError(error: HttpErrorResponse): Observable<string> {

    if (error.error instanceof ErrorEvent) {
      console.log('Client Network Error!');
      console.error(error.error.message);
    } else {
      console.log('Server Error!');
      console.error(error.error);
    }

    return throwError('Unknown Error!');
  }

  getHTTPResponseForURL(dataURL: string): Observable<any> {
    return this.http.get<any>(dataURL, { observe: 'response' })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
}
