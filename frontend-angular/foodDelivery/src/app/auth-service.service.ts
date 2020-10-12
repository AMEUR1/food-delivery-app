import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _registerUrl="http://localhost:3000/user/register"
  
  private _loginUrl="http://localhost:3000/user/login"

  constructor(private _http: HttpClient,private _route:Router) { }
 
  registerUser(user){
    return this._http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this._http.post<any>(this._loginUrl,user)
  }
}
