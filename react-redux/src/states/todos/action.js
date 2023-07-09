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

export {
  AddTodoActionCreator,
  deleteTodoActionCreator,
  completeTodoActionCreator,
};
