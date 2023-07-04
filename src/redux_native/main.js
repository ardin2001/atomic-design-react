import reducer from "./reducer.js";
import createStore from "./createStore.js";

const AddTodoActionCreator = ({ id, text }) => {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text,
    },
  };
};

const deleteTodoActionCreator = ({ id}) => {
    return {
      type: "DELETE_TODO",
      payload: {
        id,
      },
    };
  };

const store = createStore(reducer);
store.subscribe(() => console.log("current state :", store.getState()));

for(let i=1; i<4; i++){
    const addTodo = AddTodoActionCreator({ id: i, text: "state "+i });
    store.dispatch(addTodo);
}

const addTodo = deleteTodoActionCreator({ id: 2});
store.dispatch(addTodo);