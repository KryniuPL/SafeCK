import { Injectable } from '@angular/core';
import { rootUrl } from '../../HttpConfiguration';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

usersURL = '/user';

  constructor(private http: HttpClient) {
  }

   getUsers() {
    this.http.get(rootUrl + this.usersURL, {
      headers:
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
    }).subscribe(result => {
        return result as User[];
      }, error => console.error(error)
    );
   }

   getUser(id: Number) {
    this.http.get(rootUrl + this.usersURL + '/' + id, {
      headers:
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
    }).subscribe(result => {
        return result as User;
      }, error => console.error(error)
    );
   }
}
