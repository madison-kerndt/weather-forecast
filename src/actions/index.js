
export const localWeather = (weather) => {
  return { type: 'CURRENT_WEATHER', weather };
};

export const extendedForecast = (weather) => {
  return { type: 'EXTENDED_FORECAST', weather };
};
