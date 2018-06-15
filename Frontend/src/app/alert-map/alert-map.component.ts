import { Component, OnInit } from '@angular/core';
import { Alert } from '../models/alert';

import { MouseEvent } from '@agm/core';
import { AlertRestService } from '../rest/services/alert-rest/alert-rest.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-alert-map',
    templateUrl: 'alert-map.component.html',
    styleUrls: ['alert-map.component.scss']
})
export class AlertMapComponent implements OnInit {

    lat: number = 50.854019;
    lng: number = 20.5456022;

    zoom = 12;

    alerts: Observable<Alert[]>;

    constructor(private alertRestService: AlertRestService) { }

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        } else {
            this.lat = 52.2296756;
            this.lng = 21.012228700000037;
        }

        this.alerts = this.alertRestService.getAlerts();
        console.log('here');
        console.log(this.alerts);
    }
}
