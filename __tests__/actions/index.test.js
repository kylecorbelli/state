import * as constants from '../../constants';
import * as actions from '../../actions';

describe('actions', () => {
  it('should create an action to increment the counter by one', () => {
    expect(actions.increment().type).toEqual(constants.INCREMENT);
  });

  it('should create an action to decrement the counter by one', () => {
    expect(actions.decrement().type).toEqual(constants.DECREMENT);
  });

  it('should create an action to increment the counter by an arbitrary amount', () => {
    expect(actions.incrementBy(707)).toEqual({
      type: constants.INCREMENT_BY,
      payload: {
        number: 707
      }
    });
  });

  it('should create an action to decrement the counter by an arbitrary amount', () => {
    expect(actions.decrementBy(858)).toEqual({
      type: constants.DECREMENT_BY,
      payload: {
        number: 858
      }
    });
  });
});
