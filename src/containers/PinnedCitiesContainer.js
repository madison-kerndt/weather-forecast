import { connect } from 'react-redux';
import { pinNewCity } from '../actions/index';
import PinnedCities from '../components/PinnedCities';

const mapDispatchToProps = (dispatch) => {
  return {
    pinNewCity: (potato) => {
      let zipCode = parseInt(potato)
      fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=8c5526a715e37b824b2faf2c370a6888`)
        .then((res) => res.json())
        .then((forecast) => dispatch(pinNewCity({'zip': zipCode, 'city': forecast.name})))
    }
  };
};

const mapStateToProps = (state) => {
  return {
    pinnedCities: state.weatherApp.pinnedCities
  };
};

let PinnedCitiesContainer = connect(mapStateToProps, mapDispatchToProps)(PinnedCities);

export default PinnedCitiesContainer;
