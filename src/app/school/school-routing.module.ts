import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolHomeComponent } from './school-home/school-home.component';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';

const routes: Routes = [
	{ 
		path: '', 
		component: SchoolHomeComponent,
		children: [
			{
				path:'dashboard',
				component:SchoolDashboardComponent
			}
		] 
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SchoolRoutingModule { }
