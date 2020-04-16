import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';

import { NavbarComponent } from './navbar.component';

@NgModule({
	declarations: [
		NavbarComponent
	],
	imports: [
		CommonModule,
		ToolBarModule,
		ButtonModule,
	],
	exports: [
		NavbarComponent,
	]
})
export class NavbarModule { }
