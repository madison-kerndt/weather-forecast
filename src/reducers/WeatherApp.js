import { localWeather } from '../data/localWeather';

const weatherApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'CURRENT_WEATHER':
      return Object.assign({}, state, {
        currentCity: action.weather
      });
    case 'EXTENDED_FORECAST':
      return Object.assign({}, state, {
        extendedForecast: action.weather
      });
    case 'ADD_PINNEDCITY':
      return Object.assign({}, state, {
        pinnedCities: state.pinnedCities.concat(action)
      });
    default:
      return state;
  }
};

const defaultState = {
  pinnedCities: [ {'zip':80202,'city':'Denver'} , {'zip':80305,'city':'Boulder'} ],
  currentCity: '',
  extendedForecast: ''
};

export default weatherApp;
