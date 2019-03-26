import { Component, OnInit } from '@angular/core';
import {VenueService} from '../../services/venueservice';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-venue-create',
  templateUrl: './venue-create.component.html',
  styleUrls: ['./venue-create.component.css']
})
export class VenueCreateComponent implements OnInit {

  venueCreateForm: FormGroup;

  constructor(private _form: FormBuilder, private _venueService: VenueService, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.venueCreateForm = this._form.group({
      VenueName: new FormControl,
      VenueDescription: new FormControl,
      VenueLocation: new FormControl,
      VenueCapacity: new FormControl,
      VenueCost: new FormControl,
    });
  }
  onSubmit(){
    this._venueService.postVenues(this.venueCreateForm.value).subscribe(data => {
      this._router.navigate(['/venues']);
    });
  }

}
