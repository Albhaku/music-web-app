import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducer } from './app.reducer';
import { AppEffects } from './app.effects';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SpinnerCatComponent } from './shared/spinner-cat/spinner-cat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		SpinnerCatComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NavbarModule,
		HttpClientModule,
		EffectsModule.forRoot([
			AppEffects,
		]),
		StoreModule.forRoot({ app: appReducer }),
		StoreDevtoolsModule.instrument({
			name: 'Music',
			logOnly: environment.production
		}),
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
