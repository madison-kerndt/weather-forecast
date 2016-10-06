import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Routes from './routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';
import App from './components/App'

require("!style!css!sass!./styles/index.scss");


// const middleware = [thunk, createLogger];

let store = createStore(reducer);
  // applyMiddleware(...middleware)
  // helps get API call

render(
  <Provider store={ store }>
    <Routes history={ browserHistory } />
    <App />
  </Provider>,
  document.getElementById('root')
)
