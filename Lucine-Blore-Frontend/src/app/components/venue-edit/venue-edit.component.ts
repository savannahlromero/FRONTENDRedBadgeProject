import { Component, OnInit } from '@angular/core';
import { VenueService } from '../../services/venueservice';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VenueCreate } from 'src/app/models/venuecreatemodel';

@Component({
  selector: 'app-venue-edit',
  templateUrl: './venue-edit.component.html',
  styleUrls: ['./venue-edit.component.css']
})
export class VenueEditComponent implements OnInit {

  venue: VenueCreate;
  editVenueForm: FormGroup;

  constructor(private _form: FormBuilder,
    private _venueService: VenueService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._venueService.getVenuesById(p.get('id')).subscribe((singleVenue: VenueCreate) => {
        this.venue = singleVenue;
        // this.venue.VenueID = (p.get('id') as any)
        this.createForm();
      });
    });
  }
  
  ngOnInit() {
  }

  createForm(){
    this.editVenueForm = this._form.group({
      VenueID: new FormControl(this.venue.VenueID),
      VenueName: new FormControl(this.venue.VenueName),
      VenueDescription: new FormControl(this.venue.VenueDescription),
      VenueLocation: new FormControl(this.venue.VenueLocation),
      VenueCapacity: new FormControl(this.venue.VenueCapacity),
      VenueCost: new FormControl(this.venue.VenueCost),
    });
  }
  onSubmit(form){
    const updateVenue: VenueCreate = {
      VenueID: this.venue.VenueID,
      VenueName: form.value.VenueName,
      VenueDescription: form.value.VenueDescription,
      VenueLocation: form.value.VenueLocation,
      VenueCapacity: form.value.VenueCapacity,
      VenueCost: form.value.VenueCost
    };
    this._venueService.putVenues(updateVenue).subscribe(d => {
      this._router.navigate(['/venues']);
    });
  }

}
