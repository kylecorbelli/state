import axios from 'axios';
import { createStore, compose } from 'redux';
import { offline } from 'redux-offline';
import defaultOfflineConfig from 'redux-offline/lib/defaults';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from './reducers';

const customOfflineConfig = {
  ...defaultOfflineConfig,
  effect(effect, action) {
    const {
      url,
      method,
      body
    } = effect;
    return axios({
      url,
      method,
      data: body
    });
  }
};

// To access redux devtools: http://remotedev.io/local/

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(
      offline(customOfflineConfig)
    )
  );
};

export default configureStore;
