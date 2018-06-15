import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { LoginComponent } from '../app/login/login.component'
import { RegistrationComponent } from '../app/registration/registration.component'
import { NavbarComponent } from '../app/navbar/navbar.component'
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'login', component : LoginComponent},
  { path: 'register', component : RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }