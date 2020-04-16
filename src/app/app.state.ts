import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './shared/interfaces/user.interface';

export interface AppState {
	isLoading: boolean;
	user: User;
}

export const initialAppState: AppState = {
	isLoading: false,
	user: null,
};

export const selectAppState = createFeatureSelector<AppState>('app');

export interface RootState {
	app: AppState;
}
