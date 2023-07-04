const Reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((data) => data.id != action.payload.id);
    default:
      state;
  }
};

export default Reducer;
