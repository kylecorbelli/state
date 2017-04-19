import * as constants from '../constants';
import { BASE_URL } from '../config';

const countersUrl = `${BASE_URL}/counters/1`;

export const increment = () => ({
  type: constants.INCREMENT,
  meta: {
    offline: {
      effect: {
        url: countersUrl,
        method: 'PATCH',
        body: {
          action: 'increment'
        }
      },
      commit: { type: constants.DO_NOTHING },
      rollback: { type: constants.DECREMENT }
    }
  }
});

export const decrement = () => ({
  type: constants.DECREMENT,
  meta: {
    offline: {
      effect: {
        url: countersUrl,
        method: 'PATCH',
        body: {
          action: 'decrement'
        }
      },
      commit: { type: constants.DO_NOTHING },
      rollback: { type: constants.INCREMENT }
    }
  }
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

export const syncCloudCount = () => ({
  type: constants.DO_NOTHING,
  meta: {
    offline: {
      effect: {
        url: countersUrl,
        method: 'GET'
      },
      commit: { type: constants.SYNC_COUNTER },
      rollback: { type: constants.DO_NOTHING }
    }
  }
});
