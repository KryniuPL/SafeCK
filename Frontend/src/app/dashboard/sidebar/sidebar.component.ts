import { Component, OnInit } from "@angular/core";



declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '#my-tab', title: 'Tablica',  icon: 'dashboard', class: '' },
  { path: '#user-profile', title: 'Mój Profil',  icon:'person', class: '' },
  { path: '#points', title: 'Moje Punkty',  icon:'list', class: '' },
  { path: '#skills', title: 'Moje Umiejętności',  icon:'payment', class: '' },
  { path: '#history', title: 'Historia',  icon:'account_balance', class: '' },
  { path: '#settings', title: 'Ustawienia',  icon:'settings', class: '' }
];



@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})

export class SidebarComponent implements OnInit {
  
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout()
  {
    console.log("logout");
  }
}
