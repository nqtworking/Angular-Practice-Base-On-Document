import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { AppState, initialState } from './counter.state';

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({ ...state, count: state.count + 1 })),
    on(decrement, (state) => ({ ...state, count: state.count - 1 })),
    on(reset, () => initialState)
  );