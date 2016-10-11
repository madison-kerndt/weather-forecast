import { connect } from 'react-redux';
import { pinNewCity } from '../actions/index';
import Home from '../components/Home';

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (input) => {
      let zipCode = parseInt(input);
      fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=8c5526a715e37b824b2faf2c370a6888`)
        .then((res) => res.json());
      }
    };
  };
// };

const mapStateToProps = (state) => {
  // let weather = state.weatherApp.pinnedCities.map((city) => {
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${city.zip},us&units=imperial&appid=8c5526a715e37b824b2faf2c370a6888`)
  //     .then((res) => res.json());
  // });
  // console.log(weather)

  return {
    pinnedCities: state.weatherApp.pinnedCities,
  };
};

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
