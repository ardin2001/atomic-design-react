import ReducerTodo from "./todos/reducer";
import ReducerGoal from "./todos/reducer";

const ReducerRoot = (state = {}, action = {}) => {
    return{
        todos : ReducerTodo(state.todos,action),
        goals : ReducerGoal(state.goals,action)
    }
  };
  
  export default ReducerRoot;