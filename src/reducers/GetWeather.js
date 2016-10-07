import weatherData from '../data/data';

const weather = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POTATO':
      console.log('potato Added');
      return state;
    default :
      return state;
  }
};

const defaultState = {
  weatherData
};


export default weather;
