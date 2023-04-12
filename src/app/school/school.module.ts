import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { SchoolHomeComponent } from './school-home/school-home.component';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';


@NgModule({
	declarations: [
		SchoolComponent,
		SchoolHomeComponent,
		SchoolDashboardComponent
	],
	imports: [
		CommonModule,
		SchoolRoutingModule
	]
})
export class SchoolModule { }
