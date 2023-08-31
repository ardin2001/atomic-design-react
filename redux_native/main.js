import ReducerRoot from "./reducer_root.js";
import createStore from "./createStore.js";

const AddTodoActionCreator = ({ id, text }) => {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text,
      complete: false,
    },
  };
};

const deleteTodoActionCreator = ({ id }) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
};

const completeTodoActionCreator = ({ id, status }) => {
  return {
    type: "COMPLETE_TODO",
    payload: {
      id,
      status: status,
    },
  };
};

const AddGoalActionCreator = ({ id, text }) => {
  return {
    type: "ADD_GOAL",
    payload: {
      id,
      text,
    },
  };
};

const deleteGoalActionCreator = ({ id }) => {
  return {
    type: "DELETE_GOAL",
    payload: {
      id,
    },
  };
};

const store = createStore(ReducerRoot);
store.subscribe(() => console.log("current state :", store.getState()));

for (let i = 1; i < 4; i++) {
  const addTodo = AddTodoActionCreator({ id: i, text: "state " + i });
  store.dispatch(addTodo);
}

const deleteTodo = deleteTodoActionCreator({ id: 2 });
store.dispatch(deleteTodo);

const completeTodo = completeTodoActionCreator({ id: 3, status: true });
store.dispatch(completeTodo);

for (let i = 1; i < 4; i++) {
  const addGoal = AddGoalActionCreator({ id: i, text: "state " + i });
  store.dispatch(addGoal);
}
const deleteGoal = deleteGoalActionCreator({ id: 1 });
store.dispatch(deleteGoal);

const addTodo = AddTodoActionCreator({ id: 4, text: "state " + 4 });
store.dispatch(addTodo);