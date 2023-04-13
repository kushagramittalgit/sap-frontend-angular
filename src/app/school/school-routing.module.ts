import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolHomeComponent } from './school-home/school-home.component';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import { SchoolStudentRegistrationComponent } from './school-student-registration/school-student-registration.component';
import { SchoolClassRegistrationComponent } from './school-class-registration/school-class-registration.component';
import { SchoolStudentDetailsComponent } from './school-student-details/school-student-details.component';
import { SchoolStudentListComponent } from './school-student-list/school-student-list.component';
import { SchoolUsersComponent } from './school-users/school-users.component';

const routes: Routes = [
	{ 
		path: '', 
		component: SchoolHomeComponent,
		children: [
			{
				path:'dashboard',
				component:SchoolDashboardComponent
			},
			{
				path:'studentregistration',
				component:SchoolStudentRegistrationComponent
			},
			{
				path:'classregistration',
				component:SchoolClassRegistrationComponent
			},
			{
				path:'studentdetails',
				component:SchoolStudentDetailsComponent
			},
			{
				path:'studentlist',
				component:SchoolStudentListComponent
			},
			{
				path:'userregistration',
				component:SchoolUsersComponent
			}
		] 
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SchoolRoutingModule { }
