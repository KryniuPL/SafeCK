import {
  NgModule,
  Component,
  Pipe,
  OnInit
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { User } from '../models/user';



@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})

export class RegistrationComponent implements OnInit {
  
  user: User;
  myform: FormGroup;
  firstName: FormControl;
  username: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;



  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  checkIfDataIsCorrect(){
    if(this.firstName.hasError('required') || this.lastName.hasError('required')
       || this.username.hasError('required') ||  this.email.hasError('required')
       || this.email.hasError('pattern')
        || this.password.hasError('required') || this.password.hasError('minLength') ) return true;
      else return false;
  }

  registerUser(){

    console.log(this.checkIfDataIsCorrect());



  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.username = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username
      }),
      email: this.email,
      password: this.password,
    });
  }

}
