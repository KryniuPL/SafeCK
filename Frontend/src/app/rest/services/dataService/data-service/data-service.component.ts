import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'data-service',
    templateUrl: 'data-service.component.html',
    styleUrls: ['data-service.component.scss']
})
@Injectable()
export class DataServiceComponent {

   private isUserLoggedIn: boolean

   constructor(){
       this.isUserLoggedIn=false;
   }

   setUserLoggedIn(){
       this.isUserLoggedIn=true;
   }
   getUserLoggedIn()
   {
       return this.isUserLoggedIn;
   }
   logoutUser()
   {
       this.isUserLoggedIn=false;
   }

}
