import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

const Settings = ({ navigation }) => (
  <View>
    <List>
      <ListItem
        title='Name'
        onPress={() => navigation.navigate('NameSettings')}
      />
      <ListItem
        title='Background Color'
        onPress={() => navigation.navigate('BackgroundColorSettings')}
      />
    </List>
  </View>
);

export default Settings;
