import { combineReducers, Reducer } from 'redux';
import { osechiReducer, OsechiState } from './osechis';

export interface GlobalState {
  osechiState: OsechiState;
}

export const rootReducer: Reducer<GlobalState> = combineReducers<GlobalState>({
  osechiState: osechiReducer
});
