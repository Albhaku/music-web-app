import { createFeatureSelector } from '@ngrx/store';
import { Song } from '../shared/interfaces/song.interface';

export interface PublicState {
	songsList: Song[];
}

export const selectPublicState = createFeatureSelector<PublicState>('public');
