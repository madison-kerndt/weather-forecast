import { combineReducers } from 'redux';
import weather from './GetExtendedForecast';
import potato from './potato';

const rootReducer = combineReducers({weather, potato});

export default rootReducer;
