import React from 'react';
import Audio from '../../src/components/Audio';

const wrapper = shallow(<Audio />);

describe('(Component) Audio', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});
