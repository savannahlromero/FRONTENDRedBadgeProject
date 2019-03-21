import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ReviewService} from '../../services/reviewservice';
import { ReviewCreate } from '../../models/reviewcreatemodel';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {2

  review: ReviewCreate;

  constructor(private _activatedRoute: ActivatedRoute, private _reviewService: ReviewService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._reviewService.getReviewsById(routeData.get('id')).subscribe((singleReview: ReviewCreate) => {
        this.review = singleReview;
      });
    })
  }

}
