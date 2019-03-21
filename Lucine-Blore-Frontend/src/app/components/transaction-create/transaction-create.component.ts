import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TransactionService } from 'src/app/services/transactionservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  show: boolean = true;

  transactionCreateForm: FormGroup;

  constructor( private _transactionService: TransactionService, private _form: FormBuilder, private _router: Router) {
 
    }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.transactionCreateForm = this._form.group({
      TransactionID: new FormControl,
      UserID: new FormControl,
      VenueID: new FormControl,
      VenueCost: new FormControl,
    });
  }
  onSubmit(){
    this._transactionService.postTransactions(this.transactionCreateForm.value).subscribe(data => {
      this._router.navigate(['/transactions']);
    });
  }

}
