import { Component, OnInit } from '@angular/core';
import { Alert } from '../models/alert';

import { MouseEvent } from '@agm/core';
import { AlertRestService } from '../rest/services/alert-rest/alert-rest.service';
import { Observable } from 'rxjs/internal/Observable';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-alert-map',
    templateUrl: 'alert-map.component.html',
    styleUrls: ['alert-map.component.scss']
})
export class AlertMapComponent implements OnInit {

    lat: number = 50.854019;
    lng: number = 20.5456022;

    zoom = 12;

    alerts: Alert[];

    flag = false;

    constructor(private alertRestService: AlertRestService,public dialog: MatDialog) {


    }

    openAddDialog() {
        const dialogRef = this.dialog.open(AddAlertComponent, {
          height: '600px',
          width: '500px'
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }

      openFilterDialog() {
        const dialogRef = this.dialog.open(AlertFilterComponent, {
          width: '500px'
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }

    ngOnInit() {

        this.alertRestService.getAlerts().subscribe(res => {
            this.alerts = res;
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        } else {
            this.lat = 52.2296756;
            this.lng = 21.012228700000037;
        }
    }
}

@Component({
    selector: 'add-alert',
    templateUrl: 'add-alert.html',
  })
  export class AddAlertComponent {
    selectedValue: string;

    categories = [
        {value: 'steak-0', viewValue: 'Pomoc Drogowa'},
        {value: 'pizza-1', viewValue: 'Opieka nad zwierzętami'},
        {value: 'tacos-2', viewValue: 'Pomoc w zakupach'},
        {value: 'tacos-3', viewValue: 'Pomoc w przemieszczaniu się'},
        {value: 'tacos-4', viewValue: 'Inne'},
      ];

      importance = [
        {value: 0, viewValue: 'Krytyczne'},
        {value: 1, viewValue: 'Bardzo ważne'},
        {value: 2, viewValue: 'Ważne'},
        {value: 3, viewValue: 'Mniej ważne'},
        {value: 4, viewValue: 'Może poczekać'},
      ];

  }

  @Component({
    selector: 'filter-alert',
    templateUrl: 'filter-alert.html',
    styleUrls: ['alert-map.component.scss']
  })
  export class AlertFilterComponent {
    selectedValue: string;
    startDate: Date;
    endDate: Date;

    importance = [
        {value: 0, viewValue: 'Krytyczne'},
        {value: 1, viewValue: 'Bardzo ważne'},
        {value: 2, viewValue: 'Ważne'},
        {value: 3, viewValue: 'Mniej ważne'},
        {value: 4, viewValue: 'Może poczekać'},
      ];

    categories = [
        {value: 0, viewValue: 'Pomoc Drogowa'},
        {value: 1, viewValue: 'Opieka nad zwierzętami'},
        {value: 2, viewValue: 'Pomoc w zakupach'},
        {value: 3, viewValue: 'Pomoc w przemieszczaniu się'},
        {value: 4, viewValue: 'Inne'},
      ];

      statuses = [
        {value: 0, viewValue: 'Nowe'},
        {value: 1, viewValue: 'W trakcie'},
        {value: 2, viewValue: 'Zakończone'},
        {value: 3, viewValue: 'Oczekujące'},
      ];

  }