import weatherData from '../data/data';

const weather = (state = defaultState, action) => {
  switch (action.type) {
    case 'DO_SOMETHING':
      return state + 'hello';
    default :
      return state;
  }
};

const defaultState = {
  weatherData
};


export default weather;
