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
export {deleteGoalActionCreator,AddGoalActionCreator,completeTodoActionCreator,deleteTodoActionCreator,AddTodoActionCreator}