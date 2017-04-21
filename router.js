import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Counter from './components/counter';
import Settings from './components/settings';
import NameSettings from './components/settings-name';
import BackgroundColorSettings from './components/settings-background-color';

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings'
    }
  },
  NameSettings: {
    screen: NameSettings,
    navigationOptions: {
      title: 'Name'
    }
  },
  BackgroundColorSettings: {
    screen: BackgroundColorSettings,
    navigationOptions: {
      title: 'Background Color'
    }
  }
});

const Router = TabNavigator({
  Counter: {
    screen: Counter,
    navigationOptions: {
      tabBar: {
        label: 'Counter',
        icon: ({ tintColor }) => <Icon name='timeline' size={35} color={tintColor} />
      }
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      tabBar: {
        label: 'Settings',
        icon: ({ tintColor }) => <Icon name='settings' size={35} color={tintColor} />
      }
    }
  }
});

export default Router;
