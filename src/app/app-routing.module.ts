import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { SchoolLoginComponent } from './login/school-login/school-login.component';

const routes: Routes = [
	{
		path:'',
		component: HomeComponent,
	},
	{
		path:'admin/login',
		component:AdminLoginComponent
	},
	{ path: 'admin',loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
	{
		path:'school/login',
		component:SchoolLoginComponent,
	},
	{ path: 'school', loadChildren: () => import('./school/school.module').then(m => m.SchoolModule) },
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
