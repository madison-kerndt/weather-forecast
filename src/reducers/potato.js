import localWeather from '../data/localWeather';

const potato = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POTATO':
      console.log(state.localWeather.main);
      return state;
    case 'CURRENT_TEMP':
      return state.localWeather.main.temp;
    default:
      return state;
  }
};

const defaultState = {
  localWeather
};

export default potato;
