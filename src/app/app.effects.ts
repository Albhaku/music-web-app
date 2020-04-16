import { mergeMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AppService } from './app.service';
import { getUser, setUser } from './app.actions';

@Injectable()
export class AppEffects {
	constructor(
		private actions$: Actions,
		private appService: AppService,
	) { }

	getUser$ = createEffect(() => this.actions$.pipe(
		ofType(getUser),
		mergeMap(() => this.appService.getUser().pipe(
			map(response => {
				const user = response.results[0];
				user.name.brief = user.name.first[0] + user.name.last[0];
				return setUser({ user });
			})
		))
	));
}
