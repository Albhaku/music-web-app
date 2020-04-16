import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { getUser } from './app.actions';
import { RootState } from './app.state';
import { selectAppIsLoading } from './app.selectors';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title: string;
	isLoading: boolean;

	constructor(
		private store$: Store<RootState>
	) {

	}

	ngOnInit() {
		this.title = 'MusicWebApp';

		this.store$.dispatch(getUser());

		this.store$.pipe(
			select(selectAppIsLoading)
		).subscribe(isLoading => {
			this.isLoading = isLoading;
		});
	}
}
