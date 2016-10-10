import { createStore, applyMiddleware, compose } from 'redux';
// import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  compose (
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


export default store;

//
// {
//   weatherApp: {
//     pinnedCities: [],
//     currentCity: ''
//   }
// },
