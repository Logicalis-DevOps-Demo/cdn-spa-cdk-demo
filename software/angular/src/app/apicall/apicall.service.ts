import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface Result{
  message: string;
  time: string;
}


@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }
  
  getResult(url: string) {
    return this.http.get<Result>(url);
  }

  getCompleteResponse(url: string): Observable<HttpResponse<Result>> {
    return this.http.get<Result>(
      url, { observe: 'response' });
  }

}