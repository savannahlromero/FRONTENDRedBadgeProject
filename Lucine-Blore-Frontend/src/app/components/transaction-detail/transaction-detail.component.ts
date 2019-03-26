import { Component, OnInit } from '@angular/core';
import { TransactionCreate } from 'src/app/models/transactioncreatemodel';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/services/transactionservice';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  transaction: TransactionCreate

  constructor(private _activatedRoute: ActivatedRoute, private _transactionService: TransactionService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._transactionService.getTransactionsById(routeData.get('id')).subscribe((singleTransaction: TransactionCreate) => {
        this.transaction = singleTransaction;
      });
    })
  }
  
}
