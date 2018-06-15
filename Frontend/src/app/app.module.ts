import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { RegistrationComponent } from '../app/registration/registration.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Services
import { UserRestService } from '../app/rest/services/user-rest/user-rest.service';

// Material
import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// Services
import { AlertMapComponent } from './alert-map/alert-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertRestService } from './rest/services/alert-rest/alert-rest.service';
import { MainpageInfoComponent } from './mainpage-info/mainpage-info.component';

const appRoutes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'login', component : LoginComponent},
  { path: 'register', component : RegistrationComponent},
  { path: 'map', component : AlertMapComponent},
  { path: 'dashboard', component : DashboardComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    AlertMapComponent,
    DashboardComponent,
    MainpageInfoComponent
  ],
  imports: [
    MatSnackBarModule,
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
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserRestService, AlertRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
