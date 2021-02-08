import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //random api for reference:
    // private  _loginUrl ="http://localhost:3000/api/login";
    // private  _registerUrl ="http://localhost:3000/api/register";
    // private  _activeaccountUrl =" http://localhost:3000/api/activeaccount";
    
    private  _loginUrl ="http://localhost:4200/api/login";
    private  _registerUrl ="http://localhost:4200/api/register";
    private  _activeaccountUrl =" http://localhost:4200/api/activeaccount";
  
    


  constructor(private http : HttpClient) { }

//login service:
  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl,user)
  }

//registeration service:
  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl,user)
  }

//activateaccount service:
  submitUser(user: any) {
    return this.http.post<any>(this._activeaccountUrl,user)
  }

 
}
