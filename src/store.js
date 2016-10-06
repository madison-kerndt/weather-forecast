import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import weather from './data/data';

const defaultState = {
  weather,
  // pinnedCities
};

const store = createStore(rootReducer, defaultState);
const history = syncHistoryWithStore(browserHistory, store);

export default history;
export default store;
