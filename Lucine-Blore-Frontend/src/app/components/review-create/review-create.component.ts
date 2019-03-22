import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../../services/reviewservice';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { VenueService } from '../../services/venueservice';
import { VenueCreate } from '../../models/venuecreatemodel';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {
  reviewCreateForm: FormGroup;
  venues: VenueCreate[];

  constructor(private _form: FormBuilder, private _reviewService: ReviewService, private _venueService:VenueService, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
    this._venueService.getVenues().subscribe((venues: VenueCreate[]) => this.venues = venues)
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
      this._router.navigate(['/reviews']);
    });
  }

}