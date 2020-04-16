import { createReducer, Action, on } from '@ngrx/store';

import { setIsLoading, setUser } from './app.actions';
import { initialAppState, AppState } from './app.state';

const reducer = createReducer(initialAppState,
	on(setIsLoading, (state, action) => ({
		...state,
		isLoading: action.loading,
	})),
	on(setUser, (state, action) => ({
		...state,
		user: action.user,
	})),
);

export function appReducer(state: AppState, action: Action) {
	return reducer(state, action);
}
