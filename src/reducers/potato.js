export const potato = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POTATO' :
      return console.log('potato');
    default:
      return state;
  }
};
