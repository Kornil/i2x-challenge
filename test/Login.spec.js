import React from 'react';
import Login from '../src/components/Login';

describe('Login item', () => {
  const wrapper = shallow(<Login />);

  it('should be a form item', () => {
    expect(wrapper.type()).to.eql('form');
  });
});
