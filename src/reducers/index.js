const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'POTATO' :
      return console.log('potato');
    default:
      return state
  }
}

// export const potato = (action) => {
//   return {
//     type: 'POTATO',
//     action
//   };
// };

export default rootReducer;
