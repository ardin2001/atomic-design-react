const ReducerTodo = (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((data) => data.id != action.payload.id);
    case "COMPLETE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: action.payload.status };
          todo.complete = action.payload.status;
        }
        return todo;
      });

    default:
      return state;
  }
};

export default ReducerTodo;
