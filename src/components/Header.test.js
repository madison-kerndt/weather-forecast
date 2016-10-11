import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from './Header';
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('Header', () => {
  const wrapper = shallow(<Header/>);

  it('renders a <nav> on the page', () => {
    const nav = <nav></nav>;

    expect(wrapper.contains(nav)).toEqual(true);
  });
  it('is wrapped in a header', () => {

    expect(wrapper.is('header')).toEqual(true);
  });
});

describe('props called in Header', () => {

  it('should call the getWeatherAPI prop when clicked', () => {
    const getWeatherAPIMock = jest.fn();
    const wrapper = mount(
      <Header
        getWeatherAPI={getWeatherAPIMock}
      />
    );

    wrapper.find('button').simulate('click');

    expect(getWeatherAPIMock).toBeCalled();
  });
});
