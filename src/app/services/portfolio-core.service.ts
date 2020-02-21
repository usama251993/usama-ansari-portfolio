import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, concatMap } from 'rxjs/operators';

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

  getHTTPResponseForURL(dataURL: string, options?: {}): Observable<any> {
    if (options) {
      return this.http.get<any>(dataURL, options)
        .pipe(
          // concatMap(() => this.http.get<any>(assetURL, { observe: 'response' })),
          retry(3),
          catchError(this.handleError)
        );
    } else {
      return this.http.get<any>(dataURL, { observe: 'body' })
        .pipe(
          // concatMap(() => this.http.get<any>(assetURL, { observe: 'response' })),
          retry(3),
          catchError(this.handleError)
        );
    }
  }
}
