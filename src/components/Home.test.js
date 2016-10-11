import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  const wrapper = shallow(<Home/>);

  it('renders a <h1> on the page', () => {
    const h1 = <h1></h1>;

    expect(wrapper.contains(h1)).toEqual(true);
  });
  it('has a div wrapper', () => {

    expect(wrapper.is('div')).toEqual(true);
  });
});
