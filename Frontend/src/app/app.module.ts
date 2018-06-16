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


import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarLoggedComponent } from '../app/navbar-loggedIn/navbar-logged.component'
import { SidebarComponent } from '../app/dashboard/sidebar/sidebar.component'
import { MyTabComponent } from '../app/dashboard/my-tab/my-tab.component'
import { ProfileComponent } from '../app/dashboard/profile/profile.component'
import { PointsComponent } from '../app/dashboard/points/points.component'
import { SkillsComponent, AddSkillComponent } from '../app/dashboard/skills/skills.component';
import {MatTableModule} from '@angular/material/table';
import { AlertRestService } from './rest/services/alert-rest/alert-rest.service';
import { AlertMapComponent, AddAlertComponent, AlertFilterComponent } from './alert-map/alert-map.component';
import { MainpageInfoComponent } from './mainpage-info/mainpage-info.component';
import { DataServiceComponent } from './rest/services/dataService/data-service/data-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    DashboardComponent,
    NavbarLoggedComponent,
    SidebarComponent,
    MyTabComponent,
    ProfileComponent,
    PointsComponent,
    SkillsComponent,
    AlertMapComponent,
    DashboardComponent,
    MainpageInfoComponent,
    AddAlertComponent,
    AddSkillComponent,
    AlertFilterComponent

  ],
  imports: [
    BrowserAnimationsModule,
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
  MatTreeModule,
  HttpClientModule
  ],
  entryComponents: [
    AddAlertComponent,
    AddSkillComponent,
    AlertFilterComponent
  ],
  providers: [UserRestService, AlertRestService,DataServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
