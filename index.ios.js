import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from './components/counter';
import Router from './router';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  increment,
  decrement,
  incrementBy,
  decrementBy
} from './actions';

import configureStore from './configure-store';

const store = configureStore();

export default class State extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('State', () => State);
