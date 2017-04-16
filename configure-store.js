import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from './reducers';

// To access redux devtools: http://remotedev.io/local/
const configureStore = () => {
  return createStore(
    rootReducer,
    devToolsEnhancer()
  );
};

export default configureStore;
