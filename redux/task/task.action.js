import axios from "axios";

import { taskType } from "./task.type";

// API CALL STATUS

export const axiosApiStart = () => ({
  type: taskType.API_CALL_START,
  payload: "START_CALL_API"
});

export const axiosApiSuccess = () => ({
  type: taskType.API_CALL_SUCCESS,
  payload: "CALL_API_SUCCESS"
});

export const axiosApiFail = errMassage => ({
  type: taskType.API_CALL_FAIL,
  payload: errMassage
});

// GET ALL TASK-LIST

export const setTaskList = taskArray => ({
  type: taskType.GET_TASK_LIST,
  payload: taskArray
});

export const getTasksList = () => {
  return dispatch => {
    dispatch(axiosApiStart());
    axios
      .get("http://laravelapi.co/api/tasks")
      .then(resp => dispatch(setTaskList(resp.data)))
      .then(resp => dispatch(axiosApiSuccess()))
      .catch(err => dispatch(axiosApiFail(err.message)));
  };
};

// REMOVE TASK FROM LIST

export const removeTaskFromList = id => ({
  type: taskType.REMOVE_TASK_FROM_LIST,
  payload: id
});

export const deleteTask = id => {
  const target = id;
  return dispatch => {
    axios
      .delete(`http://laravelapi.co/api/tasks/${target}`)
      .then(response => dispatch(removeTaskFromList(id)))
      .catch(err => dispatch(axiosApiFail(err.message)));
  };
};

// UPDATE TASK IN LIST

export const updateTaskInList = newTask => ({
  type: taskType.UPDATE_TASK_IN_LIST,
  payload: newTask
});

export const editTask = editedTask => {
  const target = editedTask.id;
  return dispatch => {
    axios
      .put(`http://laravelapi.co/api/tasks/${target}`, {
        title: editedTask.title,
        description: editedTask.description
      })
      .then(response => dispatch(updateTaskInList(response.data.task)))
      .catch(err => dispatch(axiosApiFail(err.message)));
  };
};

// ADD NEW TASK INTO LIST

export const addNewTaskToList = newTask => ({
  type: taskType.ADD_NEW_TASK_TO_LIST,
  payload: newTask
});

export const addTask = newTask => {
  return dispatch => {
    axios
      .post("http://laravelapi.co/api/tasks", newTask)
      .then(response => dispatch(addNewTaskToList(response.data.task)))
      .catch(err => dispatch(axiosApiFail(err.message)));
  };
};
