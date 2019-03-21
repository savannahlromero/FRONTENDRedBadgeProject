import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transactionservice';
import { MatTableDataSource } from '@angular/material';
import { TransactionCreate } from 'src/app/models/transactioncreatemodel';

@Component({
  selector: 'app-transaction-home-listall',
  templateUrl: './transaction-home-listall.component.html',
  styleUrls: ['./transaction-home-listall.component.css']
})
export class TransactionHomeListallComponent implements OnInit {
  constructor(private _transactionService: TransactionService) { }
  columnNames = ['details','TransactionID','UserID', 'VenueID', 'VenueCost', 'buttons'];
  dataSource: MatTableDataSource<TransactionCreate>

  ngOnInit() {
    this._transactionService.getTransactions().subscribe((transactions: TransactionCreate[]) => {
      this.dataSource = new MatTableDataSource<TransactionCreate>(transactions);
    });
  }

}
