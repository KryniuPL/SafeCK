import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-navbar-logged",
  templateUrl: "./navbar-logged.component.html",
  styleUrls: ["./navbar-logged.component.scss"]
})

export class NavbarLoggedComponent implements OnInit {
  
  constructor(private route: Router) { 

  }
  logout()
  {
    this.route.navigate(['/']);
  }

  ngOnInit() {

  }
}
