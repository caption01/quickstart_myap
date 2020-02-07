import { taskType } from "./task.type";

const INITIAL_STATE = {
  list: [],
  message: ""
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case taskType.API_CALL_START:
      return {
        ...state,
        message: action.payload
      };

    case taskType.API_CALL_SUCCESS:
      return {
        ...state,
        message: action.payload
      };

    case taskType.API_CALL_FAIL:
      return {
        ...state,
        message: action.payload
      };

    case taskType.GET_TASK_LIST:
      return {
        ...state,
        list: action.payload
      };

    case taskType.REMOVE_TASK_FROM_LIST:
      return {
        ...state,
        list: state.list.filter(task => task.id !== action.payload)
      };

    case taskType.UPDATE_TASK_IN_LIST:
      return {
        ...state,
        list: state.list.map(item =>
          item.id !== action.payload.id ? item : action.payload
        )
      };

    case taskType.ADD_NEW_TASK_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    default:
      return state;
  }
};

export default taskReducer;
