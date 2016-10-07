import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';
import weather from './data/data';

const middleware = [ thunk, createLogger ];

const defaultState = {
  weather,
  type: 'yo'
};

const store = createStore(
  rootReducer,
  defaultState,
  compose (
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
