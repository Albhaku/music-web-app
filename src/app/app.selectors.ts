import { createSelector } from '@ngrx/store';

import { selectAppState } from './app.state';

export const selectAppIsLoading = createSelector(
	selectAppState,
	state => state.isLoading
);

export const selectAppUser = createSelector(
	selectAppState,
	state => state.user,
);

