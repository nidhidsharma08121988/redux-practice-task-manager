import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { getTasks } from '../redux-store/actions/taskActions';
import { useEffect, useState } from 'react';

const TaskList = props => {
  // useState is important, because it will keep your list updated
  const [taskList, setTaskList] = useState(props.taskList);

  useEffect(() => {
    setTaskList([props.taskItem, ...taskList]);
    //eslint-disable-next-line
  }, [props.taskItem]);

  const outcome = taskList.map((task, index) => (
    <li key={index}>{task && <Task task={task} />}</li>
  ));

  return (
    <div className='tasklist-container'>
      <h3 className='heading'>Task list</h3>
      <ul className='tasks-list'>{outcome}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  taskList: state.task_reducer.taskList,
  taskItem: state.task_reducer.taskItem,
});

export default connect(mapStateToProps, { getTasks })(TaskList);
