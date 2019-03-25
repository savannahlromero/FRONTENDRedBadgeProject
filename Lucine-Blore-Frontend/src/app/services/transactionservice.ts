import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { TransactionCreate } from '../models/transactioncreatemodel';
import { TransactionDetails} from '../models/transactiondetails';

const Api_Url = 'https://lucineandbloreluxuryvenues.azurewebsites.net'

@Injectable()
export class TransactionService {
    constructor (private _http: HttpClient, private _router: Router) {}

    getTransactions() {
        return this._http.get(`${Api_Url}/api/Transaction`, {headers: this.getHeaders () });
    }
    getTransactionsById(id: string) {
        return this._http.get(`${Api_Url}/api/Transaction/${id}`, {headers: this.getHeaders () });
    } 
    postTransactions( transaction: TransactionCreate) {
        return this._http.post(`${Api_Url}/api/Transaction`, transaction, {headers: this.getHeaders () });
    }
    putTransactions(transaction: TransactionDetails) {
        return this._http.put(`${Api_Url}/api/Transaction`, transaction, {headers: this.getHeaders () });
    }
    private getHeaders(): HttpHeaders {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}