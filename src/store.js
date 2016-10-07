import { createStore, applyMiddleware, compose } from 'redux';
// import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

const middleware = [ thunk, createLogger ];

const store = createStore(
  rootReducer,
  compose (
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


export default store;
