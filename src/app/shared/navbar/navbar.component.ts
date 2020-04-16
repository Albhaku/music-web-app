import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { User } from '../interfaces/user.interface';
import { RootState } from 'src/app/app.state';
import { selectAppUser } from 'src/app/app.selectors';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
	user: User;

	constructor(
		private store$: Store<RootState>
	) { }

	ngOnInit() {
		this.store$.pipe(
			select(selectAppUser)
		).subscribe(user => {
			this.user = user;
		});
	}

}
