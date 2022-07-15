import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  constructor(
    private http: HttpClient
  ) { }

  public get(endpoint: string, options?: any): Observable<any> {
    return this.http.get(environment.apiUrl + endpoint, options);
  }
  public post(endpoint: string, data: any, options?: any): Observable<any> {
    return this.http.post(environment.apiUrl + endpoint, data, options);
  }
  public put(endpoint: string, data: any, options?: any): Observable<any> {
    return this.http.put(environment.apiUrl + endpoint, data, options);
  }
  public delete(endpoint: string, options?: any): Observable<any> {
    return this.http.delete(environment.apiUrl + endpoint, options);
  }
}
