import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage-info',
  templateUrl: './mainpage-info.component.html',
  styleUrls: ['./mainpage-info.component.css']
})
export class MainpageInfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  start()
  {
    this.router.navigate(['/map']);
  }

}
