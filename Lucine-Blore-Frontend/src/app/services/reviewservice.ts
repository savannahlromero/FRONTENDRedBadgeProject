import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ReviewCreate } from '../models/reviewcreatemodel';
import { ReviewDetails } from '../models/reviewdetailmodel';
import { APIURL } from '../../environments/environment.prod';

@Injectable()
export class ReviewService {
    constructor (private _http: HttpClient, private _router: Router) {}

    getReviews() {
        return this._http.get(`${APIURL}/api/Review`, {headers: this.getHeaders () });
    }
    getReviewsById(id: string) {
        return this._http.get(`${APIURL}/api/Review/${id}`, {headers: this.getHeaders () });
    }   //GetById needs to to corrected and not {id} <-- that//
    postReviews(review: ReviewCreate) {
        return this._http.post(`${APIURL}/api/Review`, review, {headers: this.getHeaders () });
    }
    putReviews(review: ReviewDetails) {
        return this._http.put(`${APIURL}/api/Review`, review, {headers: this.getHeaders () });
    }
    deleteReviews(id: number) {
        return this._http.delete(`${APIURL}/api/Review/${id}`, {headers: this.getHeaders () });
    }   //GetById needs to to corrected and not {id} <-- that//

    private getHeaders(): HttpHeaders {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}