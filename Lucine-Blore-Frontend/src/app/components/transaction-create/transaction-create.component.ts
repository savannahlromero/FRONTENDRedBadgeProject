import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { VenueService } from '../../services/venueservice';
import { VenueCreate } from '../../models/venuecreatemodel';
import { TransactionService } from 'src/app/services/transactionservice';


@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  // show: boolean = true;

  transactionCreateForm: FormGroup;
  venues: VenueCreate[];

  constructor(private _form: FormBuilder, private _transactionService: TransactionService, private _venueService: VenueService, private _router: Router) {
    this.createForm();
    }

  ngOnInit() {

    this._venueService.getVenues().subscribe((venues: VenueCreate[]) => this.venues = venues)
  }

  createForm(){
    this.transactionCreateForm = this._form.group({
      VenueID: new FormControl,
      VenueName: new FormControl,
      DaysRenting: new FormControl,
      TransactionCost: new FormControl,
    });
  }
  onSubmit(){
    this._transactionService.postTransactions(this.transactionCreateForm.value).subscribe(data => {
      this._router.navigate(['/transactions']);
      console.log(data);
    });
  }

}
