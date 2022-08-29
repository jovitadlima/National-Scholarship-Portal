import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentSuccessComponent } from './student/student-success/student-success.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentSchemeListComponent } from './student/student-scheme-list/student-scheme-list.component';
import { StudentSchemeDetailsComponent } from './student/student-scheme-details/student-scheme-details.component';
import { ScholarshipApplicationFormComponent } from './student/scholarship-application-form/scholarship-application-form.component';
import { InstituteRegisterComponent } from './institute/institute-register/institute-register.component';
import { InstituteLoginComponent } from './institute/institute-login/institute-login.component';
import { InstituteDashboardComponent } from './institute/institute-dashboard/institute-dashboard.component';
import { InstituteViewApplicationDetailsComponent } from './institute/institute-view-application-details/institute-view-application-details.component';
import { InstituteViewApplicationListComponent } from './institute/institute-view-application-list/institute-view-application-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { OfficerLoginComponent } from './officer/officer-login/officer-login.component';
import { OfficerDashboardComponent } from './officer/officer-dashboard/officer-dashboard.component';
import { ViewScholarshipApplicationListComponent } from './officer/view-scholarship-application-list/view-scholarship-application-list.component';
import { ViewScholarshipApplicationDetailsComponent } from './officer/view-scholarship-application-details/view-scholarship-application-details.component';
import { MinistryLoginComponent } from './ministry/ministry-login/ministry-login.component';
import { MinistryDashboardComponent } from './ministry/ministry-dashboard/ministry-dashboard.component';
import { MinistryInstituteRegistrationRequestListComponent } from './ministry/ministry-institute-registration-request-list/ministry-institute-registration-request-list.component';
import { MinistryInstituteRegistrationRequestDetailsComponent } from './ministry/ministry-institute-registration-request-details/ministry-institute-registration-request-details.component';
import { MinistryStudentApplicationListComponent } from './ministry/ministry-student-application-list/ministry-student-application-list.component';
import { MinistryStudentApplicationDetailsComponent } from './ministry/ministry-student-application-details/ministry-student-application-details.component';
import { OfficerInstituteRegistrationRequestDetailsComponent } from './officer/officer-institute-registration-request-details/officer-institute-registration-request-details.component';
import { OfficerInstituteRegistrationRequestListComponent } from './officer/officer-institute-registration-request-list/officer-institute-registration-request-list.component';
import { StudentApplicationsComponent } from './student/student-applications/student-applications.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GuidelinesComponent } from './shared/guidelines/guidelines.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegisterComponent,
    StudentLoginComponent,
    StudentSuccessComponent,
    StudentDashboardComponent,
    StudentProfileComponent,
    StudentSchemeListComponent,
    StudentSchemeDetailsComponent,
    ScholarshipApplicationFormComponent,
    InstituteRegisterComponent,
    InstituteLoginComponent,
    InstituteDashboardComponent,
    InstituteViewApplicationDetailsComponent,
    InstituteViewApplicationListComponent,
    NavbarComponent,
    LandingPageComponent,
    OfficerLoginComponent,
    OfficerDashboardComponent,
    ViewScholarshipApplicationListComponent,
    ViewScholarshipApplicationDetailsComponent,
    MinistryLoginComponent,
    MinistryDashboardComponent,
    MinistryInstituteRegistrationRequestListComponent,
    MinistryInstituteRegistrationRequestDetailsComponent,
    MinistryStudentApplicationListComponent,
    MinistryStudentApplicationDetailsComponent,
    OfficerInstituteRegistrationRequestDetailsComponent,
    OfficerInstituteRegistrationRequestListComponent,
    StudentApplicationsComponent,
    ErrorPageComponent,
    GuidelinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
