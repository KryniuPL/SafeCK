import { Component, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';



@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})

export class RegistrationComponent implements OnInit {
  
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  username: FormControl;
  password: FormControl;

  constructor() { 

  }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
          username: new FormControl('',Validators.required),
          firstName: new FormControl('', Validators.required), 
          lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [ 
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*") 
      ]),
      password: new FormControl('', [
          Validators.minLength(8), 
          Validators.required
      ]),
      language: new FormControl() 
  });
}

}
