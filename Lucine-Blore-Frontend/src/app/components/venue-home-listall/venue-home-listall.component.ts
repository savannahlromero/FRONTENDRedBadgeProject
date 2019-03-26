import { Component, OnInit } from '@angular/core';
import { VenueService} from '../../services/venueservice';
import { VenueCreate } from '../../models/venuecreatemodel';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-venue-home-listall',
  templateUrl: './venue-home-listall.component.html',
  styleUrls: ['./venue-home-listall.component.css']
})
export class VenueHomeListallComponent implements OnInit {
  constructor(private _venueService: VenueService) { }
  columnNames = ['details','VenueID','VenueName', 'VenueDescription', 'VenueLocation', 'VenueCapacity', 'VenueCost', 'buttons'];
  dataSource: MatTableDataSource<VenueCreate>

  ngOnInit() {
    this._venueService.getVenues().subscribe((venues: VenueCreate[]) => {
      this.dataSource = new MatTableDataSource<VenueCreate>(venues);
    });
  }

}
