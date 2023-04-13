import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { SchoolHomeComponent } from './school-home/school-home.component';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import { SchoolStudentRegistrationComponent } from './school-student-registration/school-student-registration.component';
import { SchoolClassRegistrationComponent } from './school-class-registration/school-class-registration.component';
import { SchoolStudentDetailsComponent } from './school-student-details/school-student-details.component';
import { SchoolStudentListComponent } from './school-student-list/school-student-list.component';
import { SchoolUsersComponent } from './school-users/school-users.component';


@NgModule({
	declarations: [
		SchoolComponent,
		SchoolHomeComponent,
		SchoolDashboardComponent,
  SchoolStudentRegistrationComponent,
  SchoolClassRegistrationComponent,
  SchoolStudentDetailsComponent,
  SchoolStudentListComponent,
  SchoolUsersComponent
	],
	imports: [
		CommonModule,
		SchoolRoutingModule
	]
})
export class SchoolModule { }
