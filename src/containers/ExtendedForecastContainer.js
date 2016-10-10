import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addaPotato } from '../actions/index';
import ExtendedForecast from '../components/ExtendedForecast';

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPotato: () => {
      dispatch(addaPotato())
    }
  };
};

const mapStateToProps=(state) => {
  return {
  };
};

let ExtendForecast = connect(mapStateToProps, mapDispatchToProps)(ExtendedForecast);

export default ExtendForecast;
