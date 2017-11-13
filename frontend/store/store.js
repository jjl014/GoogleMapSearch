import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import RootReducer from '../reducers/root_reducer';

const configureStore = () => (
  createStore(
    RootReducer,
    applyMiddleware(logger)
  )
);

export default configureStore;
