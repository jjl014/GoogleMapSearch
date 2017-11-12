import {RECEIVE_BUSINESSES} from '../actions/business_actions';
import {RECEIVE_FILTER} from '../actions/filter_actions';

const businessReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_FILTER:
      if (action.filter.type === "query" && action.filter.value === "") {
        return [];
      }
    default:
      return state;
  }
};

export default businessReducer;
