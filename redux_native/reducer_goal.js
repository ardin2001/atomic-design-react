const ReducerGoal = (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_GOAL":
      return [...state, action.payload];
    case "DELETE_GOAL":
      return state.filter((data) => data.id != action.payload.id);
    default:
      return state;
  }
};

export default ReducerGoal;
