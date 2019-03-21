import { Component, OnInit } from '@angular/core';
import { VenueService } from '../../services/venueservice';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VenueCreate } from 'src/app/models/venuecreatemodel';

@Component({
  selector: 'app-venue-delete',
  templateUrl: './venue-delete.component.html',
  styleUrls: ['./venue-delete.component.css']
})
export class VenueDeleteComponent implements OnInit {

  venue: VenueCreate;

  constructor(private _venueService: VenueService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._venueService.getVenuesById(p.get('id')).subscribe((singleVenue: VenueCreate) => {
        this.venue = singleVenue;
      }) 
    })
  }

  ngOnInit() {
  }

  onDelete(){
    this._venueService.deleteVenues(this.venue.VenueID).subscribe(() => {
      this._router.navigate(['/venues']);
    })
  }

}
