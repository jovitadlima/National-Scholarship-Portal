import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
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
  { path: 'studentRegistrationSuccess', component: StudentSuccessComponent },
  { path: 'studentLogin', component: StudentLoginComponent }, // check if required
  { path: 'schemesList', component: StudentSchemeListComponent },
  { path: 'schemesDetails', component: StudentSchemeDetailsComponent },
  { path: 'studentRegisterSuccess', component: StudentSuccessComponent },

  // for institute

  // for officer

  // for ministry

  // error
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
