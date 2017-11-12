import {combineReducers} from 'redux';
import businessReducer from './business_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  businesses: businessReducer,
  filters: filterReducer
});

export default rootReducer;
