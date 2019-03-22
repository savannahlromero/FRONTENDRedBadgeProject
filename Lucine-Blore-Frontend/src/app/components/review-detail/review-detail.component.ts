import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ReviewService} from '../../services/reviewservice';
import { ReviewDetails } from '../../models/reviewdetailmodel';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {2

  review: ReviewDetails;

  constructor(private _activatedRoute: ActivatedRoute, private _reviewService: ReviewService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._reviewService.getReviewsById(routeData.get('id')).subscribe((singleReview: ReviewDetails) => {
        this.review = singleReview;
      });
    })
  }

}
