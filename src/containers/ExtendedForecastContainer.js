import { connect } from 'react-redux';
import { addaPotato, localWeather } from '../actions/index';
import ExtendedForecast from '../components/ExtendedForecast';

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPotato: () => {
      dispatch(addaPotato())
    },
    getCurrentCity: () => {
      dispatch(localWeather())
    }

  };
};

const mapStateToProps = (state) => {
  console.log(state.weatherApp.pinnedCities);
  console.log(state.weatherApp.currentCity);
  return {
    pinnedCities: state.weatherApp.pinnedCities,
    currentCity: state.weatherApp.currentCity
  };
};

let ExtendForecast = connect(mapStateToProps, mapDispatchToProps)(ExtendedForecast);

export default ExtendForecast;
