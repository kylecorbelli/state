import * as constants from '../constants';

const rootReducer = (state = 0, action) => {
  switch(action.type) {
    case constants.INCREMENT:
      return state + 1;
    case constants.DECREMENT:
      return state - 1;
    case constants.INCREMENT_BY:
      return state + action.payload.number;
    case constants.DECREMENT_BY:
      return state - action.payload.number;
    default:
      return state;
  }
};

export default rootReducer;
