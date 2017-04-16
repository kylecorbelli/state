import * as constants from '../constants';

export const increment = () => ({
  type: constants.INCREMENT
});

export const decrement = () => ({
  type: constants.DECREMENT
});

export const incrementBy = (number) => ({
  type: constants.INCREMENT_BY,
  payload: {
    number
  }
});

export const decrementBy = (number) => ({
  type: constants.DECREMENT_BY,
  payload: {
    number
  }
});
