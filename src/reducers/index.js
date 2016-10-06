import  { combineReducers } from 'redux';
import todos from './todos';

const reducer = combineReducers({
  todos
  // list all exported reducers here
});

export default reducer;
// combineReducers({
//   // list all exported reducers here
//   weatherApp: reducer,
// }),
