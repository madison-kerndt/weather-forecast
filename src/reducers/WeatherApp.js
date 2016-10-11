import { localWeather } from '../data/localWeather';

const weatherApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'CURRENT_WEATHER':
      return Object.assign({}, state, {
        currentCity: action.weather
      });
      case 'PINNED_WEATHER':
        return Object.assign({}, state, {
          pinnedWeather: state.pinnedCities.concat(action)
        });
    case 'EXTENDED_FORECAST':
      return Object.assign({}, state, {
        extendedForecast: action.weather
      });
    case 'ADD_PINNEDCITY':
      return Object.assign({}, state, {
        pinnedCities: state.pinnedCities.concat(action.input)
      });
    default:
      return state;
  }
};

const defaultState = {
  pinnedCities: [],
  currentCity: '',
  extendedForecast: '',
  pinnedWeather: []
};

export default weatherApp;
