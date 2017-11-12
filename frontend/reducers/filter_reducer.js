import {RECEIVE_FILTER} from '../actions/filter_actions';

const _defaultState = {
  query: "",
  location: null
};

const filterReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FILTER:
      return Object.assign(
        {},
        state,
        {[action.filter.type]: action.filter.value}
      );
    default:
      return state;
  }
};

export default filterReducer;
