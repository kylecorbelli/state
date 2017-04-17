import React, { PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const ChangeCounterValueButton = ({ text, color, onPress }) => (
  <TouchableOpacity
    style={[{backgroundColor: color}, styles.button]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

ChangeCounterValueButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  buttonText: {
    color: '#fffddb',
    fontSize: 50
  }
});

export default ChangeCounterValueButton;
