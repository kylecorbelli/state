import 'react-native';
import React from 'react';
import ChangeCounterValueButton from '../../components/change-counter-value-button';
import renderer from 'react-test-renderer';

describe('<ChangeCounterValueButton />', () => {
  it('should match Snapchot', () => {
    const tree = renderer.create(
      <ChangeCounterValueButton
        text='Test Button'
        color='black'
        onPress={() => {}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
