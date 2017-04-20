import * as constants from '../constants';

const isSyncing = (state = false, action) => {
  switch (action.type) {
    case constants.START_SYNCING_COUNTER:
      return true;
    case constants.SYNC_COUNTER:
    case constants.FINISH_SYNCING_COUNTER:
      return false;
    default:
      return state;
  }
};

export default isSyncing;
