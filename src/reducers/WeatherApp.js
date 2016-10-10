import localWeather from '../data/localWeather';

const weatherApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POTATO':
      console.log(state.currentCity.main);
      return state;
    case 'CURRENT_WEATHER':
      return Object.assign({}, state, {
        currentCity: action.weather.name
      });
    case 'HIT_API':
      console.log('in reducer: ',action.weather);
      return state;
    default:
      return state;
  }
};

const defaultState = {
  pinnedCities: [],
  currentCity: ''
};

export default weatherApp;
