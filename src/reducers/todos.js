const todos = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_WEATHER':
      return 'hello world'
      default:
        return state
  }
};

export default todos;
