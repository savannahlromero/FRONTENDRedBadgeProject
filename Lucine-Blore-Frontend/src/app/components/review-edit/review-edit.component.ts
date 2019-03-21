import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/reviewservice';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewCreate } from 'src/app/models/reviewcreatemodel';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {

  review: ReviewCreate;
  editReviewForm: FormGroup;

  constructor(private _form: FormBuilder,
    private _reviewService: ReviewService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._reviewService.getReviewsById(p.get('id')).subscribe((singleReview: ReviewCreate) => {
        this.review = singleReview;
        // this.review.ReviewID = (p.get('id') as any)
        console.log(p.get('id'))
        this.createForm();
      });
    });
  }
  
  ngOnInit() {
  }

  createForm(){
    this.editReviewForm = this._form.group({
      ReviewID: new FormControl(this.review.ReviewID),
      VenueID: new FormControl(this.review.VenueID),
      VenueRating: new FormControl(this.review.VenueRating),
      Comments: new FormControl(this.review.Comments),    
    });
  }
  onSubmit(form){
    const updateReview: ReviewCreate = {
      ReviewID: this.review.ReviewID,
      VenueID: form.value.VenueID,
      VenueRating: form.value.VenueRating,
      Comments: form.value.Comments,
    };
    this._reviewService.putReviews(updateReview).subscribe(d => {
      this._router.navigate(['/reviews']);
    });
  }

}
