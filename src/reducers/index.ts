import { combineReducers, Reducer } from 'redux';

export interface GlobalState {}

export const rootReducer: Reducer<GlobalState> = combineReducers<GlobalState>(
  {}
);
