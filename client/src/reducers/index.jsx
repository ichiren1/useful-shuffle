const initialState = {value: 0};

const reducer = (state = initialState, action) => {
  let value = state.value;
  switch (action.type) {
  case 'ACTION_INCREMENT':
    return {value: value + action.value};
  case 'ACTION_DECREMENT':
    return {value: value + action.value};
  default:
    return state;
  }
};

export default reducer;
