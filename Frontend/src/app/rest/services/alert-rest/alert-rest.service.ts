import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rootUrl } from '../../HttpConfiguration';
import { Alert } from '../../../models/alert';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AlertRestService {

  alertURL = '/alert';

  alerts: Alert[];

  constructor(private http: HttpClient) {
  }

   getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(rootUrl + this.alertURL);
   }

   getAlert(id: Number): Alert {
     let alert: Alert;
    this.http.get(rootUrl + this.alertURL + '/' + id, {
      headers:
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
    }).subscribe(result => {
        alert = result as Alert;
      }, error => console.error(error)
    );
    return alert;
   }
}
