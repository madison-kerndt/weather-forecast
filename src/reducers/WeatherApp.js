import localWeather from '../data/localWeather';

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
    default:
      return state;
  }
};

const defaultState = {
  pinnedCities: [],
  currentCity: '',
  extendedForecast: ''
};

export default weatherApp;
