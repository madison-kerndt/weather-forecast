import localWeather from '../data/localWeather';

const weatherApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POTATO':
      console.log(state.currentCity.main);
      return state;
    case 'CURRENT_TEMP':
      return state.currentCity.main.temp;
    default:
      return state;
  }
};

const defaultState = {
  pinnedCities: [],
  currentCity: 'Denver'
};

export default weatherApp;
