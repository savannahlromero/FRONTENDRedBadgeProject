import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = 'https://lucineandbloreluxuryvenues.azurewebsites.net/'

@Injectable()
export class VenueService {
    constructor (private _http: HttpClient, private _router: Router) {}

    getVenues() {
        return this._http.get(`${Api_Url}/api/Venues`, {headers: this.getHeaders () });
    }
    getVenuesById() {
        return this._http.get(`${Api_Url}/api/Venues/{id}`, {headers: this.getHeaders () });
    }   //GetById needs to to corrected and not {id} <-- that//
    postVenues() {
        return this._http.post(`${Api_Url}/api/Venues`, {headers: this.getHeaders () });
    }
    putVenues() {
        return this._http.put(`${Api_Url}/api/Venues`, {headers: this.getHeaders () });
    }
    deleteVenues() {
        return this._http.delete(`${Api_Url}/api/Venues/{id}`, {headers: this.getHeaders () });
    }   //GetById needs to to corrected and not {id} <-- that//

    private getHeaders(): HttpHeaders {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}