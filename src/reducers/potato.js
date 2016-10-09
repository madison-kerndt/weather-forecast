const potato = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POTATO' :
      return console.log(defaultState);
    default:
      return state;
  }
};

const defaultState = {
  obj1: { name: 'ben', type: 'potato'}
}


export default potato;
