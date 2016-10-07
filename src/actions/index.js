// export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
//
// export const receiveForecast = (forecastData) => ({
//   // action object
// });
//
// export const fetchForecast = options => dispatch => {
//   // return fetch API call
// };

export const addPotato = (text) => {
  return {
    type: 'ADD_POTATO',
    text
  };
};
