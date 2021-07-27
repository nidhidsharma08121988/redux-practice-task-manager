import React from 'react';

const Task = props => {
  const { task } = props;
  return (
    <div
      className={
        task.completed ? 'task-container  completed' : 'task-container'
      }
    >
      <h4>{task.title}</h4>
    </div>
  );
};

export default Task;
