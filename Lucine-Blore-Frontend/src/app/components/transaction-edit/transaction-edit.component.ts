import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transactionservice';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionDetails } from 'src/app/models/transactiondetails';
import { MatSelectModule } from '@angular/material/select';
import { VenueService } from '../../services/venueservice';
import { VenueCreate } from '../../models/venuecreatemodel';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {

  transaction: TransactionDetails;
  editTransactionForm: FormGroup;
  venues: VenueCreate[];

  constructor(private _form: FormBuilder,
    private _transactionService: TransactionService, private _venueService: VenueService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._transactionService.getTransactionsById(p.get('id')).subscribe((singleTransaction: TransactionDetails) => {
        this.transaction = singleTransaction;
        // this.review.ReviewID = (p.get('id') as any)
        console.log(p.get('id'))
        this.createForm();
      });
    });
  }
  
  ngOnInit() {
    this._venueService.getVenues().subscribe((venues: VenueCreate[]) => this.venues = venues)
  }

  createForm(){
    this.editTransactionForm = this._form.group({
      TransactionID: new FormControl(this.transaction.TransactionID),
      VenueID: new FormControl(this.transaction.VenueID),
      VenueName: new FormControl(this.transaction.VenueName),
      DaysRenting: new FormControl(this.transaction.DaysRenting),
      TransactionCost: new FormControl(this.transaction.TransactionCost),    
    });
  }
  onSubmit(form){
    const updateTransaction: TransactionDetails = {
      TransactionID: this.transaction.TransactionID,
      VenueID: form.value.VenueID,
      VenueName: form.value.VenueName,
      DaysRenting: form.value.DaysRenting,
      TransactionCost: form.value.TransactionCost,
    };
    this._transactionService.putTransactions(updateTransaction).subscribe(d => {
      this._router.navigate(['/transactions']);
    });
  }

}
