import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this._registerForm = this._form.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }
  onSubmit(){
    console.log(this._registerForm.value);
  }

}
