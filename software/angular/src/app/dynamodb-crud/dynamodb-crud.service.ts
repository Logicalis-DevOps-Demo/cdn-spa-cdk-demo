import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';


export interface Users{
  message: string;
  time: string;
  path: string;
  httpmethod: string;
}


@Injectable()
export class DynamoDbService {

  constructor(private http: HttpClient) { }
  
  putUser(url: string, body: any) {
    return this.http.put<Users>(url, body);
  }

  putUserCompleteResponse(url: string,body: string): Observable<HttpResponse<Users>> {
    return this.http.put<Users>(
      url,body, { observe: 'response' });
  }


  getUserCompleteResponse(url: string): Observable<HttpResponse<Users>> {
    return this.http.get<Users>(
      url, { observe: 'response' });
  }


  deleteUserCompleteResponse(url: string,id: string): Observable<HttpResponse<Users>> {
    return this.http.delete<Users>(
      url+'/'+id, { observe: 'response' });
  }

}