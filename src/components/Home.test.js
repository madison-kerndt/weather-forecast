import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './Home';
import weatherData from '../data/data'
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('Home', () => {
  const wrapper = shallow(<Home/>);

  it('has a div wrapper', () => {

    expect(wrapper.type(), 'div')
  });

});
