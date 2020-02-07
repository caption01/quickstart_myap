import { taskType } from "./task.type";

export const taskTest = message => ({
  type: taskType.TEST,
  payload: message
});
