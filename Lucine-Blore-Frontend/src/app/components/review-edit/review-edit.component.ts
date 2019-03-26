import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/reviewservice';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewCreate } from 'src/app/models/reviewcreatemodel';
import { ReviewDetails} from '../../models/reviewdetailmodel';
import { MatSelectModule } from '@angular/material/select';
import { VenueService } from '../../services/venueservice';
import { VenueCreate } from '../../models/venuecreatemodel';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {

  review: ReviewDetails;
  editReviewForm: FormGroup;
  venues: VenueCreate[];

  constructor(private _form: FormBuilder,
    private _reviewService: ReviewService, private _venueService: VenueService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._reviewService.getReviewsById(p.get('id')).subscribe((singleReview: ReviewDetails) => {
        this.review = singleReview;
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
    this.editReviewForm = this._form.group({
      ReviewID: new FormControl(this.review.ReviewID),
      VenueID: new FormControl(this.review.VenueID),
      VenueName: new FormControl(this.review.VenueName),
      VenueDescription: new FormControl(this.review.VenueDescription),
      VenueRating: new FormControl(this.review.VenueRating),
      Comments: new FormControl(this.review.Comments),    
    });
  }
  onSubmit(form){
    const updateReview: ReviewDetails = {
      ReviewID: this.review.ReviewID,
      VenueID: form.value.VenueID,
      VenueName: form.value.VenueName,
      VenueDescription: form.value.VenueDescription,
      VenueRating: form.value.VenueRating,
      Comments: form.value.Comments,
    };
    this._reviewService.putReviews(updateReview).subscribe(d => {
      this._router.navigate(['/reviews']);
    });
  }

}
