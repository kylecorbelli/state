import 'react-native';
import React from 'react';
import { Counter } from '../../components/counter';
import renderer from 'react-test-renderer';

describe('<Counter />', () => {
  it('should match Snapshot', () => {
    const tree = renderer.create(
      <Counter
        counter={6}
        increment={() => {}}
        decrement={() => {}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
