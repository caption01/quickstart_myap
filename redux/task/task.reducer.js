import { taskType } from "./task.type";

const INITIAL_STATE = {
  list: [],
  message: "i am null"
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case taskType.TEST:
      return {
        ...state,
        message: action.payload
      };

    default:
      return state;
  }
};

export default taskReducer;
