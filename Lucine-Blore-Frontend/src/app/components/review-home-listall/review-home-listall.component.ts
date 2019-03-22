import { Component, OnInit } from '@angular/core';
import { ReviewService} from '../../services/reviewservice';
import { ReviewDetails } from '../../models/reviewdetailmodel';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-review-home-listall',
  templateUrl: './review-home-listall.component.html',
  styleUrls: ['./review-home-listall.component.css']
})
export class ReviewHomeListallComponent implements OnInit {
  constructor(private _reviewService: ReviewService) { }
  columnNames = ['details','ReviewID', 'VenueName', 'VenueRating', 'Comments', 'buttons'];
  dataSource: MatTableDataSource<ReviewDetails>

  ngOnInit() {
    this._reviewService.getReviews().subscribe((reviews: ReviewDetails[]) => {
      this.dataSource = new MatTableDataSource<ReviewDetails>(reviews);
    });
  }

}
