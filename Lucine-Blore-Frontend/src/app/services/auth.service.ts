import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/registeruser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { APIURL } from '../../environments/environment.prod';

@Injectable()
export class AuthService {

  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser){
    return this._http.post(`${APIURL}/api/Account/Register`, regUserData);

  }

  login(loginInfo){
    const str=
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    
    return this._http.post(`${APIURL}/Token`, str).subscribe( (token: Token) => {
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/'])
    });
  }

  currentUser(): Observable<Object>{
    if(!localStorage.getItem('id_token')) {return new Observable(observer => observer.next(false)); }

    return this._http.get(`${APIURL}/api/Account/UserInfo`, {headers: this.setHeader()});
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    this._http.post(`${APIURL}/api/Account/Logout`, {headers: this.setHeader()});
    this._router.navigate(['/login']);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
