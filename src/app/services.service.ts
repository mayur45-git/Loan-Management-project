import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './models/register';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url="http://localhost:9099/api/reguserdata"
  url1="http://localhost:9099/api/loginuser"

  constructor( private httpClient : HttpClient) { }

  registercust(register: Register): Observable<Object>{
 // console.log(register);
    return this.httpClient.post(`${this.url}`,register);
  }

  loginUserFromRemote(register: Register): Observable<any>
  {
    return this.httpClient.post<any>(`${this.url1}`,register)
  }


}
