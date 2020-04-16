import { createAction, props } from '@ngrx/store';

import { User } from './shared/interfaces/user.interface';

export const setIsLoading = createAction('[App] Set is loading or not', props<{ loading: boolean }>());

export const getUser = createAction('[App] Get user logged');
export const setUser = createAction('[App] Set user logged', props<{ user: User }>());

