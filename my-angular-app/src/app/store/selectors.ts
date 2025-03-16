import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './state';

export const selectAppState = createFeatureSelector<AppState>('appState');

export const selectCount = createSelector(
  selectAppState,
  (state) => state ? state.count : 0 
);

