import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {VenueCreate} from '../models/venuecreatemodel';
import { APIURL } from '../../environments/environment.prod';

@Injectable()
export class VenueService {
    constructor (private _http: HttpClient, private _router: Router) {}

    getVenues() {
        return this._http.get(`${APIURL}/api/Venues`, {headers: this.getHeaders () });
    }
    getVenuesById(id: string) {
        return this._http.get(`${APIURL}/api/Venues/${id}`, {headers: this.getHeaders () });
    }   //GetById needs to to corrected and not {id} <-- that//
    postVenues(venue: VenueCreate) {
        return this._http.post(`${APIURL}/api/Venues`, venue, {headers: this.getHeaders () });
    }
    putVenues(venue: VenueCreate) {
        return this._http.put(`${APIURL}/api/Venues`, venue, {headers: this.getHeaders () });
    }
    deleteVenues(id: number) {
        return this._http.delete(`${APIURL}/api/Venues/${id}`, {headers: this.getHeaders () });
    }   //GetById needs to be corrected and not {id} <-- that//

    private getHeaders(): HttpHeaders {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}