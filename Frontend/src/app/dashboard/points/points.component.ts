import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-points",
  templateUrl: "./points.component.html",
  styleUrls: ["./points.component.scss"]
})

export class PointsComponent implements OnInit {
  
  switch=false;

  constructor() { 

  }

  ngOnInit() {

  }
  switchSwitcher(){
    this.switch=true;
  }
}
