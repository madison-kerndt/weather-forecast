//what is the need for this store?

//All we need to do is when we create the store
//Require the reducers by the exported name
//and now that reducer is available to the actions

const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//
// import { createStore, compse } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';
// import rootReducer from './reducers/index';
// import weather from './data/weather'
// export default exampleReducer;
