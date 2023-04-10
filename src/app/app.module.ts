import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { AdminDetailsComponent } from './admin/admin-details/admin-details.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AdminLoginComponent,
		AdminDashboardComponent,
		AdminRegistrationComponent,
		AdminDetailsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
