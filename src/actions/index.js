export const addaPotato = () => {
  return {
    type: 'ADD_POTATO',
  };
};

export const localWeather = (weather) => {
  return { type: 'CURRENT_WEATHER',
          weather
  };
}

export const extend5Day = () => {
  return {
    type: '5_DAY',
  };
};
