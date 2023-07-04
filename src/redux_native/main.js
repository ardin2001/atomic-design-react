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

const createStore = () => {
  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (payload) => {
    state = Reducer(state, payload);
    listeners.forEach((listener) => listener());
  };

  return { getState, subscribe, dispatch };
};

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

const store = createStore();
store.subscribe(() => console.log("current state :", store.getState()));

for(let i=1; i<4; i++){
    const addTodo = AddTodoActionCreator({ id: i, text: "state "+i });
    store.dispatch(addTodo);
}

const addTodo = deleteTodoActionCreator({ id: 2});
store.dispatch(addTodo);