import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/reviewservice';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewCreate } from 'src/app/models/reviewcreatemodel';
import { ReviewDetails} from '../../models/reviewdetailmodel';

@Component({
  selector: 'app-review-delete',
  templateUrl: './review-delete.component.html',
  styleUrls: ['./review-delete.component.css']
})
export class ReviewDeleteComponent implements OnInit {

  review: ReviewDetails;

  constructor(private _reviewService: ReviewService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._reviewService.getReviewsById(p.get('id')).subscribe((singleReview: ReviewDetails) => {
        this.review = singleReview;
      }) 
    })
  }

  ngOnInit() {
  }

  onDelete(){
    this._reviewService.deleteReviews(this.review.ReviewID).subscribe(() => {
      this._router.navigate(['/reviews']);
    })
  }

}
