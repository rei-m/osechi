import { applyMiddleware, createStore, Action, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, GlobalState } from '@src/reducers';

const store = createStore<GlobalState, Action<{}>, {}, {}>(
  rootReducer,
  applyMiddleware(thunk)
);

export const getStore = (): Store<GlobalState> => {
  return store;
};
