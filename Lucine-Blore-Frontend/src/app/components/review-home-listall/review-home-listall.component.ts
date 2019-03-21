import { Component, OnInit } from '@angular/core';
import { ReviewService} from '../../services/reviewservice';
import { ReviewCreate } from '../../models/reviewcreatemodel';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-review-home-listall',
  templateUrl: './review-home-listall.component.html',
  styleUrls: ['./review-home-listall.component.css']
})
export class ReviewHomeListallComponent implements OnInit {
  constructor(private _reviewService: ReviewService) { }
  columnNames = ['details','ReviewID','VenueID', 'VenueRating', 'Comments', 'buttons'];
  dataSource: MatTableDataSource<ReviewCreate>

  ngOnInit() {
    this._reviewService.getReviews().subscribe((reviews: ReviewCreate[]) => {
      this.dataSource = new MatTableDataSource<ReviewCreate>(reviews);
    });
  }

}
