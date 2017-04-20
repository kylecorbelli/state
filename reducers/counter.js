import { combineReducers } from 'redux';
import isSyncing from './counter-is-syncing';
import currentValue from './counter-current-value';

const counter = combineReducers({
  isSyncing,
  currentValue
});

export default counter;
