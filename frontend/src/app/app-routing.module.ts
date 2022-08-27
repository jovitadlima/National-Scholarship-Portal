import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { InstituteDashboardComponent } from './institute/institute-dashboard/institute-dashboard.component';
import { InstituteLoginComponent } from './institute/institute-login/institute-login.component';
import { InstituteRegisterComponent } from './institute/institute-register/institute-register.component';
import { InstituteViewApplicationDetailsComponent } from './institute/institute-view-application-details/institute-view-application-details.component';
import { InstituteViewApplicationListComponent } from './institute/institute-view-application-list/institute-view-application-list.component';
import { MinistryDashboardComponent } from './ministry/ministry-dashboard/ministry-dashboard.component';
import { MinistryInstituteRegistrationRequestListComponent } from './ministry/ministry-institute-registration-request-list/ministry-institute-registration-request-list.component';
import { MinistryLoginComponent } from './ministry/ministry-login/ministry-login.component';
import { MinistryStudentApplicationListComponent } from './ministry/ministry-student-application-list/ministry-student-application-list.component';
import { OfficerDashboardComponent } from './officer/officer-dashboard/officer-dashboard.component';
import { OfficerInstituteRegistrationRequestDetailsComponent } from './officer/officer-institute-registration-request-details/officer-institute-registration-request-details.component';
import { OfficerInstituteRegistrationRequestListComponent } from './officer/officer-institute-registration-request-list/officer-institute-registration-request-list.component';
import { OfficerLoginComponent } from './officer/officer-login/officer-login.component';
import { ViewScholarshipApplicationDetailsComponent } from './officer/view-scholarship-application-details/view-scholarship-application-details.component';
import { ViewScholarshipApplicationListComponent } from './officer/view-scholarship-application-list/view-scholarship-application-list.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { ScholarshipApplicationFormComponent } from './student/scholarship-application-form/scholarship-application-form.component';
import { StudentApplicationsComponent } from './student/student-applications/student-applications.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { StudentSchemeDetailsComponent } from './student/student-scheme-details/student-scheme-details.component';
import { StudentSchemeListComponent } from './student/student-scheme-list/student-scheme-list.component';
import { StudentSuccessComponent } from './student/student-success/student-success.component';

// TODO: Change routes later to child routes and error handling
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  // for student
  { path: 'studentRegister', component: StudentRegisterComponent },
  { path: 'studentDashboard', component: StudentDashboardComponent },
  { path: 'studentProfile', component: StudentProfileComponent },
  {
    path: 'scholarshipApplicationForm',
    component: ScholarshipApplicationFormComponent,
  },
  { path: 'studentApplications', component: StudentApplicationsComponent },
  { path: 'studentLogin', component: StudentLoginComponent }, // check if required
  { path: 'schemesList', component: StudentSchemeListComponent },
  { path: 'schemesDetails', component: StudentSchemeDetailsComponent },
  { path: 'studentRegisterSuccess', component: StudentSuccessComponent },

  // for institute
  { path: 'instituteRegister', component: InstituteRegisterComponent },
  { path: 'instituteDashboard', component: InstituteDashboardComponent },
  {
    path: 'instituteStudentApplicationsList',
    component: InstituteViewApplicationListComponent,
  },
  {
    path: 'instituteStudentApplicationsDetails',
    component: InstituteViewApplicationDetailsComponent,
  },
  { path: 'instituteLogin', component: InstituteLoginComponent }, // check if required

  // for officer
  { path: 'officerDashboard', component: OfficerDashboardComponent },
  { path: 'officerLogin', component: OfficerLoginComponent },
  {
    path: 'officerApplicationDetail',
    component: ViewScholarshipApplicationDetailsComponent,
  },
  {
    path: 'officerApplicationList',
    component: ViewScholarshipApplicationListComponent,
  },
  {
    path: 'officerInstituteDetail',
    component: OfficerInstituteRegistrationRequestDetailsComponent,
  },
  {
    path: 'officerInstituteList',
    component: OfficerInstituteRegistrationRequestListComponent,
  },

  // for ministry
  { path: 'ministryDashboard', component: MinistryDashboardComponent },
  {
    path: 'ministryStudentApplications',
    component: MinistryStudentApplicationListComponent,
  },
  {
    path: 'institutePendingList',
    component: MinistryInstituteRegistrationRequestListComponent,
  },
  // { path: 'ministrySchemeDetails', component: SchemeDetailsComponent },
  { path: 'ministryLogin', component: MinistryLoginComponent },

  // error
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
