
export const localWeather = (weather) => {
  return { type: 'CURRENT_WEATHER', weather };
};

export const getWeather = (weather) => {
  return { type: 'PINNED_WEATHER', weather };
};

export const extendedForecast = (weather) => {
  return { type: 'EXTENDED_FORECAST', weather };
};

export const pinNewCity = (input) => {
  debugger;
  return { type: 'ADD_PINNEDCITY', input };
};
