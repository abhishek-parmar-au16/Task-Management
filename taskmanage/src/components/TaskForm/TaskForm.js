import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TaskForm.css';

const TaskForm = ({ onTaskAdd }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        title: taskTitle,
      };
      onTaskAdd(newTask, 'Added');
      setTaskTitle('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleTaskSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskTitle}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
