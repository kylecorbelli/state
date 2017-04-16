import counterReducer from '../../reducers/counter';
import * as actions from '../../actions';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual(0);
  });

  it('should handle action "increment"', () => {
    expect(counterReducer(0, actions.increment())).toEqual(1);
  });

  it('should handle action "decrement"', () => {
    expect(counterReducer(1, actions.decrement())).toEqual(0);
  });

  it('should handle action "incrementBy"', () => {
    expect(counterReducer(0, actions.incrementBy(707))).toEqual(707);
  });

  it('should handle action "decrementBy"', () => {
    expect(counterReducer(0, actions.decrementBy(707))).toEqual(-707);
  });
});
