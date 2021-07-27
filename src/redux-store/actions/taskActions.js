import { ADD_TASK, GET_TASKS } from './types';

//getTasks
export const getTasks = () => dispatch => {
  dispatch({
    type: GET_TASKS,
  });
};

//addTask
export const addTask = task => dispatch => {
  dispatch({
    type: ADD_TASK,
    payload: task,
  });
};
