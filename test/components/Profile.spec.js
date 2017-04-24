import React from 'react';
import Profile from '../../src/components/Profile';

const wrapper = shallow(<Profile />);

describe('(Component) Profile', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});
