const initialState = {
    count: 0,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: Math.max(0, state.count - 1),
        };
      default:
        return state;
    }
  };
  
  export { initialState, reducer };
  