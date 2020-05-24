import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  // public PostLogin(){
  //   return this.httpClient.post(`http://localhost:5495/api/ApplicationUser/Login`,body:);
  // }

}
