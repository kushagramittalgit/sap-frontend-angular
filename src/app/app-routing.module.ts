import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { AdminDetailsComponent } from './admin/admin-details/admin-details.component';

const routes: Routes = [
	{
		path:'',
		component: HomeComponent,
	},
	{
		path:'admin',
		component:AdminLoginComponent,
		children: []
	},
	{
		path:'admin/dashboard',
		component:AdminDashboardComponent,
	},
	{
		path:'admin/registration',
		component:AdminRegistrationComponent,
	},
	{
		path:'admin/details',
		component:AdminDetailsComponent,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
