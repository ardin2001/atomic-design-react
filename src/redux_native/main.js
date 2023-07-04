import reducer from "./reducer.js";
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

const store = createStore(reducer);
store.subscribe(() => console.log("current state :", store.getState()));

for (let i = 1; i < 4; i++) {
  const addTodo = AddTodoActionCreator({ id: i, text: "state " + i });
  store.dispatch(addTodo);
}

const addTodo = deleteTodoActionCreator({ id: 2 });
store.dispatch(addTodo);

const completeTodo = completeTodoActionCreator({ id: 3, status: true });
store.dispatch(completeTodo);
