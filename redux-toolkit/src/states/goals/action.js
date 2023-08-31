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
export { AddGoalActionCreator, deleteGoalActionCreator };
