import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { VenueService} from '../../services/venueservice';
import { VenueCreate } from '../../models/venuecreatemodel';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.css']
})
export class VenueDetailsComponent implements OnInit {

  venue: VenueCreate;

  constructor(private _activatedRoute: ActivatedRoute, private _venueService: VenueService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._venueService.getVenuesById(routeData.get('id')).subscribe((singleVenue: VenueCreate) => {
        this.venue = singleVenue;
      });
    })
  }

}
