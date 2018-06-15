import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rootUrl } from '../../HttpConfiguration';
import { Alert } from '../../../models/alert';



@Injectable({
  providedIn: 'root'
})
export class AlertRestService {

  usersURL = '/alert';

  constructor(private http: HttpClient) {
  }

   getAlerts() {
    let alerts: Alert[];
    this.http.get(rootUrl + this.usersURL, {
      headers:
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
    }).subscribe(result => {
        alerts = result as Alert[];
      }, error => console.error(error)
    );
    return alerts;
   }

   getAlert(id: Number) {
    this.http.get(rootUrl + this.usersURL + '/' + id, {
      headers:
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
    }).subscribe(result => {
        return result as Alert;
      }, error => console.error(error)
    );
   }
}
