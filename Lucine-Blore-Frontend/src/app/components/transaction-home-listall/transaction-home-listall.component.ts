import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transactionservice';
import { MatTableDataSource } from '@angular/material';
import { TransactionDetails } from 'src/app/models/transactiondetails';

@Component({
  selector: 'app-transaction-home-listall',
  templateUrl: './transaction-home-listall.component.html',
  styleUrls: ['./transaction-home-listall.component.css']
})
export class TransactionHomeListallComponent implements OnInit {
  constructor(private _transactionService: TransactionService) { }
  columnNames = ['details','TransactionID', 'VenueID', 'VenueName', 'DaysRenting', 'TransactionCost', 'buttons'];
  dataSource: MatTableDataSource<TransactionDetails>

  ngOnInit() {
    this._transactionService.getTransactions().subscribe((transactions: TransactionDetails[]) => {
      this.dataSource = new MatTableDataSource<TransactionDetails>(transactions);
    });
  }

}
