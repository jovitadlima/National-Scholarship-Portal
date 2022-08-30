import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { InstituteAllStudentsListComponent } from './institute/institute-all-students-list/institute-all-students-list.component';
import { InstituteApprovedApplicationsListComponent } from './institute/institute-approved-applications-list/institute-approved-applications-list.component';
import { InstituteDashboardComponent } from './institute/institute-dashboard/institute-dashboard.component';
import { InstituteLoginComponent } from './institute/institute-login/institute-login.component';
import { InstituteRegisterComponent } from './institute/institute-register/institute-register.component';
import { InstituteViewApplicationDetailsComponent } from './institute/institute-view-application-details/institute-view-application-details.component';
import { InstituteViewApplicationListComponent } from './institute/institute-view-application-list/institute-view-application-list.component';
import { MinistryDashboardComponent } from './ministry/ministry-dashboard/ministry-dashboard.component';
import { MinistryInstituteRegistrationRequestDetailsComponent } from './ministry/ministry-institute-registration-request-details/ministry-institute-registration-request-details.component';
import { MinistryInstituteRegistrationRequestListComponent } from './ministry/ministry-institute-registration-request-list/ministry-institute-registration-request-list.component';
import { MinistryLoginComponent } from './ministry/ministry-login/ministry-login.component';
import { MinistrySchemeAddComponent } from './ministry/ministry-scheme-add/ministry-scheme-add.component';
import { MinistrySchemeDetailsComponent } from './ministry/ministry-scheme-details/ministry-scheme-details.component';
import { MinistrySchemeEditComponent } from './ministry/ministry-scheme-edit/ministry-scheme-edit.component';
import { MinistrySchemeListComponent } from './ministry/ministry-scheme-list/ministry-scheme-list.component';
import { MinistryStudentApplicationDetailsComponent } from './ministry/ministry-student-application-details/ministry-student-application-details.component';
import { MinistryStudentApplicationListComponent } from './ministry/ministry-student-application-list/ministry-student-application-list.component';
import { OfficerDashboardComponent } from './officer/officer-dashboard/officer-dashboard.component';
import { OfficerInstituteRegistrationRequestDetailsComponent } from './officer/officer-institute-registration-request-details/officer-institute-registration-request-details.component';
import { OfficerInstituteRegistrationRequestListComponent } from './officer/officer-institute-registration-request-list/officer-institute-registration-request-list.component';
import { OfficerLoginComponent } from './officer/officer-login/officer-login.component';
import { ViewScholarshipApplicationDetailsComponent } from './officer/view-scholarship-application-details/view-scholarship-application-details.component';
import { ViewScholarshipApplicationListComponent } from './officer/view-scholarship-application-list/view-scholarship-application-list.component';
import { InstituteAuthGuard } from './services/auth-guards/institute-auth.guard';
import { MinistryAuthGuard } from './services/auth-guards/ministry-auth.guard';
import { OfficerAuthGuard } from './services/auth-guards/officer-auth.guard';
import { StudentAuthGuard } from './services/auth-guards/student-auth.guard';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { ScholarshipApplicationFormComponent } from './student/scholarship-application-form/scholarship-application-form.component';
import { StudentApplicationsDetailComponent } from './student/student-applications-detail/student-applications-detail.component';
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
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },

  // for student
  { path: 'studentRegister', component: StudentRegisterComponent },
  {
    path: 'studentDashboard',
    canActivate: [StudentAuthGuard],
    component: StudentDashboardComponent,
  },
  {
    path: 'studentProfile',
    canActivate: [StudentAuthGuard],
    component: StudentProfileComponent,
  },
  {
    path: 'scholarshipApplicationForm',
    canActivate: [StudentAuthGuard],
    component: ScholarshipApplicationFormComponent,
  },
  {
    path: 'studentApplications',
    canActivate: [StudentAuthGuard],
    component: StudentApplicationsComponent,
  },
  {
    path: 'studentApplicationDetail/:id',
    canActivate: [StudentAuthGuard],
    component: StudentApplicationsDetailComponent,
  },
  { path: 'studentLogin', component: StudentLoginComponent }, // check if required
  {
    path: 'schemesList',
    canActivate: [StudentAuthGuard],
    component: StudentSchemeListComponent,
  },
  {
    path: 'schemesDetails',
    canActivate: [StudentAuthGuard],
    component: StudentSchemeDetailsComponent,
  },
  { path: 'studentRegisterSuccess', component: StudentSuccessComponent },

  // for institute
  { path: 'instituteRegister', component: InstituteRegisterComponent },
  {
    path: 'instituteDashboard',
    canActivate: [InstituteAuthGuard],
    component: InstituteDashboardComponent,
  },
  {
    path: 'instituteStudentApplications',
    canActivate: [InstituteAuthGuard],
    component: InstituteViewApplicationListComponent,
  },
  {
    path: 'instituteStudentApplicationDetail/:id',
    canActivate: [InstituteAuthGuard],
    component: InstituteViewApplicationDetailsComponent,
  },
  { path: 'instituteLogin', component: InstituteLoginComponent }, // check if required
  {
    path: 'instituteAllStudents',
    canActivate: [InstituteAuthGuard],
    component: InstituteAllStudentsListComponent,
  },
  {
    path: 'instituteApprovedApplications',
    canActivate: [InstituteAuthGuard],
    component: InstituteApprovedApplicationsListComponent,
  },

  // for officer
  {
    path: 'officerDashboard',
    canActivate: [OfficerAuthGuard],
    component: OfficerDashboardComponent,
  },
  { path: 'officerLogin', component: OfficerLoginComponent },
  {
    path: 'officerApplicationDetail/:id',
    canActivate: [OfficerAuthGuard],
    component: ViewScholarshipApplicationDetailsComponent,
  },
  {
    path: 'officerApplicationList',
    canActivate: [OfficerAuthGuard],
    component: ViewScholarshipApplicationListComponent,
  },
  {
    path: 'officerInstituteDetail/:id',
    canActivate: [OfficerAuthGuard],
    component: OfficerInstituteRegistrationRequestDetailsComponent,
  },
  {
    path: 'officerInstitutesList',
    canActivate: [OfficerAuthGuard],
    component: OfficerInstituteRegistrationRequestListComponent,
  },

  // for ministry
  {
    path: 'ministryDashboard',
    canActivate: [MinistryAuthGuard],
    component: MinistryDashboardComponent,
  },
  {
    path: 'ministryApplicationList',
    canActivate: [MinistryAuthGuard],
    component: MinistryStudentApplicationListComponent,
  },
  {
    path: 'ministryApplicationDetail/:id',
    canActivate: [MinistryAuthGuard],
    component: MinistryStudentApplicationDetailsComponent,
  },
  {
    path: 'ministryInstituteList',
    canActivate: [MinistryAuthGuard],
    component: MinistryInstituteRegistrationRequestListComponent,
  },
  {
    path: 'ministryInstituteDetail/:id',
    canActivate: [MinistryAuthGuard],
    component: MinistryInstituteRegistrationRequestDetailsComponent,
  },
  {
    path: 'ministrySchemeList',
    canActivate: [MinistryAuthGuard],
    component: MinistrySchemeListComponent,
  },
  {
    path: 'ministrySchemeAdd',
    canActivate: [MinistryAuthGuard],
    component: MinistrySchemeAddComponent,
  },
  {
    path: 'ministrySchemeDetail/:id',
    canActivate: [MinistryAuthGuard],
    component: MinistrySchemeDetailsComponent,
  },
  {
    path: 'ministrySchemeEdit/:id',
    canActivate: [MinistryAuthGuard],
    component: MinistrySchemeEditComponent,
  },
  { path: 'ministryLogin', component: MinistryLoginComponent },

  // error
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
