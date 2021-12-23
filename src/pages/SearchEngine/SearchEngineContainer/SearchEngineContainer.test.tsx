import React from 'react';

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import SearchEngineContainer from './SearchEngineContainer';
import { Provider } from 'react-redux';
import { store } from '../../../redux';

describe('Tests on the SearchEngineContainer />Component', () => {
  test('It  Should match the snapshot correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SearchEngineContainer />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('It should render <SearchEngineContainer /> correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SearchEngineContainer />
      </Provider>
    );

    expect(wrapper.find('SearchEngineContainer').length).toBe(1);
  });
});
