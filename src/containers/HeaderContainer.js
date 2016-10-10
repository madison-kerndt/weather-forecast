import { connect } from 'react-redux';
import { localWeather } from '../actions/index';
import Header from '../components/Header';

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherAPI: () => {
      const apikey = '8c5526a715e37b824b2faf2c370a6888';
      navigator.geolocation.getCurrentPosition((position) => {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${apikey}`)
          .then((res) => res.json())
          .then((forecast) => dispatch(localWeather(forecast)));
      });
    }
  };
};

const mapStateToProps = (state) => {
  return {
    currentCity: state.weatherApp.currentCity
  };
};

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
