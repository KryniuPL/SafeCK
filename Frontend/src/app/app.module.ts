import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { RegistrationComponent } from '../app/registration/registration.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';
import { MatButtonModule } from '@angular/material/button';

// Services
import { UserRestService } from '../app/rest/services/user-rest.service';
import { AlertMapComponent } from './alert-map/alert-map.component';

const appRoutes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'login', component : LoginComponent},
  { path: 'register', component : RegistrationComponent},
  { path: 'map', component : AlertMapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    AlertMapComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // AGM
    AgmCoreModule.forRoot({
      apiKey: 'Maybe another time ;)'
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [UserRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
