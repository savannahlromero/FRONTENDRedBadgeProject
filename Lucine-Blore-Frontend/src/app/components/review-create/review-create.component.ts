import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../../services/reviewservice';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {
  reviewCreateForm: FormGroup;

  constructor(private _form: FormBuilder, private _reviewService: ReviewService, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.reviewCreateForm = this._form.group({
      VenueID: new FormControl,
      VenueRating: new FormControl,
      Comments: new FormControl,
    });
  }
  onSubmit(){
    this._reviewService.postReviews(this.reviewCreateForm.value).subscribe(data => {
      this._router.navigate(['/venues']);
    });
  }

}