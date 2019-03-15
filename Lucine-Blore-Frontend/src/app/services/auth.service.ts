import { Injectable } from '@angular/core';
import { APIURL } from '../environments/environment.prod';
import { RegisterUser } from '../models/registeruser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(regUserData: RegisterUser){

  }
}
