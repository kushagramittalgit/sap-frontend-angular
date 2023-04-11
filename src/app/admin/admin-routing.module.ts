import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';

const routes: Routes = [
	{
		path:'',
		component:AdminHomeComponent,
		children: [
			{
				path:'dashboard',
				component:AdminDashboardComponent,
			},
			{
				path:'registration',
				component:AdminRegistrationComponent,
			},
			{
				path:'details',
				component:AdminDetailsComponent,
			},
			{
				path:'edit',
				component:AdminEditComponent
			}
		]
	},];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
