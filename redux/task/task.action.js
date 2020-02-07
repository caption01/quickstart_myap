import { taskType } from "./task.type";

export const taskTest = () => ({
  action: taskType.TEST,
  payload: "this is test function of redux"
});
