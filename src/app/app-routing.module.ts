import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { AdminDetailsComponent } from './admin/admin-details/admin-details.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';

const routes: Routes = [
	{
		path:'',
		component: HomeComponent,
	},
	{
		path:'admin/login',
		component:AdminLoginComponent
	},
	{
		path:'admin',
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
	},
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
