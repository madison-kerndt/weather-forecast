import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  item1,
  item2
}

const store = createStore(rootReducer, defaultState);
const history = syncHistoryWithStore(browserHistory, store);
