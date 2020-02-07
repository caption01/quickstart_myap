import { taskType } from "./task.type";

const INITIAL_STATE = {
  list: []
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case taskType.TEST:
      return action.payload;

    default:
      return state;
  }
};

export default taskReducer;
