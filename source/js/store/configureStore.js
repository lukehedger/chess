import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// storage service
import { STATE_KEY } from '../constants/storage';
import * as Storage from '../services/storage';

const logger = createLogger({ collapsed: true });

const finalCreateStore = compose(
  applyMiddleware(thunk, logger)
)(createStore);

// persist stored state
const initialState = Storage.getItem(STATE_KEY) || {};

export default function configureStore(state = initialState) {

  const store = finalCreateStore(rootReducer, state);

  // store state on change
  store.subscribe( () => {
    Storage.setItem(STATE_KEY, store.getState());
  });

  return store;

}
