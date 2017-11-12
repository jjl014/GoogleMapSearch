import {combineReducers} from 'redux';
import businessReducer from './business_reducer';

const rootReducer = combineReducers({
  businesses: businessReducer
});

export default rootReducer;
