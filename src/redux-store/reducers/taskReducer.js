import { ADD_TASK, GET_TASKS } from '../actions/types';

const initialTaskState = {
  taskList: [
    { id: 1, title: 'task 1', completed: true },
    { id: 2, title: 'task 2', completed: false },
    { id: 3, title: 'task 3', completed: true },
  ],
  taskItem: null,
};

const taskReducer = (state = initialTaskState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskItem: action.payload,
      };
    case GET_TASKS:
    default:
      return state;
  }
};

export default taskReducer;
