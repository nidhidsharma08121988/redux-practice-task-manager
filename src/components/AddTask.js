import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux-store/actions/taskActions';

const AddTask = props => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleChange = e => {
    if (e.target.value === 'c') {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const task = {
      id: 4,
      title: title,
      completed: completed,
    };
    console.log(task);
    props.addTask(task);
    setTitle('');
    setCompleted(false);
  };
  return (
    <div className='add-form-container'>
      <h2 className='heading'>Add task form</h2>
      <form className='my-form' onSubmit={handleSubmit}>
        <input
          className='form-item'
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <div className='radio-grp'>
          <div className='form-item'>
            <input
              type='radio'
              id='completed'
              name='status'
              value='c'
              checked={completed === true}
              onChange={handleChange}
            />
            <label htmlFor='completed'>Completed</label>
          </div>
          <div className='form-item'>
            <input
              type='radio'
              id='notComplete'
              value='nc'
              name='status'
              checked={completed === false}
              onChange={handleChange}
            />
            <label htmlFor='notComplete'>Not Completed</label>
          </div>
        </div>
        <button type='submit' className='btn form-item'>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addTask })(AddTask);
