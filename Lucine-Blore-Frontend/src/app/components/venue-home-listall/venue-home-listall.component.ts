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
  columnNames = ['VenueName', 'VenueDescription', 'VenueLocation', 'VenueCapacity', 'VenueCost'];
  dataSource: MatTableDataSource<VenueCreate>
  constructor(private _venueService: VenueService) { }

  ngOnInit() {
    this._venueService.getVenues().subscribe((venues: VenueCreate[]) => {
      this.dataSource = new MatTableDataSource<VenueCreate>(venues);
    });
  }

}
