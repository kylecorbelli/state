import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import {
  increment,
  decrement
} from '../actions';
import ChangeCounterValueButton from './change-counter-value-button';

const Counter = ({ counter, increment, decrement }) => (
  <View style={styles.screen}>
    <Text style={styles.content}>{counter}</Text>
    <View style={styles.buttons}>
      <ChangeCounterValueButton
        text='-'
        color='#baa077'
        onPress={decrement}
      />
      <ChangeCounterValueButton
        text='+'
        color='#77dd79'
        onPress={increment}
      />
    </View>
  </View>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#44c0ff'
  },
  content: {
    fontSize: 200,
    color: '#fffddb',
    fontFamily: 'arial'
  },
  buttons: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => ({
  counter: state.counter
});

export { Counter };

export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);
