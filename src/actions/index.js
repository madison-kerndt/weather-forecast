// export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
//
// export const receiveForecast = (forecastData) => ({
//   // action object
// });
//
// export const fetchForecast = options => dispatch => {
//   // return fetch API call
// };

// export default weatherApi {
//
//  handleLocation() {
//    navigator.geolocation.getCurrentPosition((position) => {
//      return this.handleWeather(position.coords.latitude, position.coords.longitude, apikey);
//    });
//  }
//
//  handleWeather(lat, long, apikey) {
//    let url = (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`);
//    fetch(url)
//    .then((req) => { (req.json());  });
//  }
// }

export const addaPotato = () => {
  return {
    type: 'ADD_POTATO',
    id: 'butts'
  };
};

export const localWeather = () => {
  return { type: 'CURRENT_TEMP' };
}

export const extend5Day = () => {
  return {
    type: '5_DAY',
  };
};


// export default addaPotato;
