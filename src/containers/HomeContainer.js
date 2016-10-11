import { connect } from 'react-redux';
import { pinNewCity } from '../actions/index';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {
    pinnedCities: state.weatherApp.pinnedCities,
  };
};

let HomeContainer = connect(mapStateToProps, null)(Home);

export default HomeContainer;
