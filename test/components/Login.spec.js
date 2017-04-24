import React from 'react';
import Login from '../../src/components/Login';

const wrapper = shallow(<Login />);

describe('(Component) Login', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});
