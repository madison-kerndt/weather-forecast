const potato = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POTATO' :
      console.log(defaultState);
      return state;
    default:
      return state;
  }
};

const defaultState = {
  obj1: { name: 'ben', type: 'potato'}
}


export default potato;
