import { connect } from 'react-redux';
import addPotato from '../actions/index';
import ExtendedForecast from '../components/ExtendedForecast';

const mapDispatchToProps=(dispatch) => {
  return {
    onClick: () => {
      dispatch(addPotato("yo"));
    }
  };
};

let ExtendForecast = connect(null, mapDispatchToProps)(ExtendedForecast);

export default ExtendForecast;
