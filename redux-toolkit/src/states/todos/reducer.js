const ReducerTodo = (state = [], action = {}) => {
  console.log(state)
    switch (action.type) {
      case "ADD_TODO":
        return [...state, action.payload];
      case "DELETE_TODO":
        return state.filter((data) => data.id != action.payload.id);
      case "TOGGLE_TODO":
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
    
      case "RECEIVE_TODOS":
        return action.payload.todos
      default:
        return state;
    }
  };
  
  export default ReducerTodo;