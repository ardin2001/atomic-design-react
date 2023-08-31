import ReducerGoal from "./reducer_goal.js";
import ReducerTodo from "./reducer_todo.js";

const ReducerRoot = (state = {}, action = {}) => {
    return{
        todos : ReducerTodo(state.todos,action),
        goals : ReducerGoal(state.goals,action)
    }
  };
  
  export default ReducerRoot;