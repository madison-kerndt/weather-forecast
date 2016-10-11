import React from 'react';
import { shallow, mount } from 'enzyme';

import ExtendedForecast from './ExtendedForecast';
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('ExtendedForecast', () => {
  const wrapper = shallow(<ExtendedForecast/>);

  it('renders a <ul> on the page', () => {
    const title = <ul></ul>;

    expect(wrapper.contains(title)).toEqual(true);
  });
  it('has a class of .forecast', () => {

    expect(wrapper.is('#forecast')).toEqual(true);
  });
});

describe('props called in ExtendedForecast', () => {

  it('should call the getCurrentCity prop when clicked', () => {
    const getCurrentCityMock = jest.fn();
    const wrapper = mount(
      <ExtendedForecast
        getCurrentCity={getCurrentCityMock}
      />
    );

    wrapper.find('.extended-weather-card').simulate('click');

    expect(getCurrentCityMock).toBeCalled();
  });
});
