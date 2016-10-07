import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import getWeather from './GetWeather';
import potato from './potato';

const rootReducer = combineReducers({getWeather, potato});

export default rootReducer;
