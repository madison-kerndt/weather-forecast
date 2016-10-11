import { connect } from 'react-redux';
import { extendedForecast } from '../actions/index';
import ExtendedForecast from '../components/ExtendedForecast';

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentCity: () => {
      const apikey = '8c5526a715e37b824b2faf2c370a6888';
      navigator.geolocation.getCurrentPosition((position) => {
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${apikey}`)
          .then((res) => res.json())
          .then((forecast) => dispatch(extendedForecast(forecast)));
      });
    }
  };
};

const mapStateToProps = (state) => {
  return {
    extendedForecast: state.weatherApp.extendedForecast
  };
};

let ExtendForecast = connect(mapStateToProps, mapDispatchToProps)(ExtendedForecast);

export default ExtendForecast;
