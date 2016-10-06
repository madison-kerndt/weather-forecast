import  { connect } from 'react-redux';
import { displayWeather } from '../actions';
import Header from './components/Header';

const matchDispatchToProps = (dispatch) => {
  return {
    handleDisplayWeather: (text) => {
      dispatch(displayWeather(text))
    }
  }
}

let HeaderContainer = connect(null, matchDispatchToProps)(Header)

export default HeaderContainer;
