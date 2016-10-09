import { connect } from 'react-redux';
import addaPotato from '../actions/index';
import ExtendedForecast from '../components/ExtendedForecast';

const mapDispatchToProps = dispatch => {
  return {
    fun: () => {
      dispatch(console.log(addaPotato()));
    }
  };
};

const mapStateToProps=(dispatch) => {
  return {
    store.dispatch()
  };
}

let ExtendForecast = connect(mapStateToProps, mapDispatchToProps)(ExtendedForecast);

export default ExtendForecast;
