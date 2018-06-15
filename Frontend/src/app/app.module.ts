import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { RegistrationComponent } from '../app/registration/registration.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// Services
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';


import { UserRestService } from '../app/rest/services/user-rest.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarLoggedComponent } from '../app/navbar-loggedIn/navbar-logged.component'
import { SidebarComponent } from '../app/dashboard/sidebar/sidebar.component'
import { MyTabComponent } from '../app/dashboard/my-tab/my-tab.component'
import { ProfileComponent } from '../app/dashboard/profile/profile.component'
import { PointsComponent } from '../app/dashboard/points/points.component'
import { SkillsComponent } from '../app/dashboard/skills/skills.component';
import {MatTableModule} from '@angular/material/table';

const appRoutes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'login', component : LoginComponent},
  { path: 'register', component : RegistrationComponent},
  { path: 'dashboard', component : DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    NavbarLoggedComponent,
    SidebarComponent,
    MyTabComponent,
    ProfileComponent,
    PointsComponent,
    SkillsComponent
  ],
  imports: [
    MatSnackBarModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatTableModule,
    MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
  ],
  providers: [UserRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
