import {RECEIVE_FILTER} from '../actions/filter_actions';

const _defaultState = {
  query: "",
  location: {}
};

const businessReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FILTER:
      return {[action.filter.type]: action.filter.value};
    default:
      return state;
  }
};

export default businessReducer;
