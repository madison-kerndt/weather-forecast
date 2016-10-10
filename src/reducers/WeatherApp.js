import localWeather from '../data/localWeather';

const weatherApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'CURRENT_WEATHER':
      return Object.assign({}, state, {
        currentCity: action.weather
      });
    default:
      return state;
  }
};

const defaultState = {
  pinnedCities: [],
  currentCity: ''
};

export default weatherApp;
