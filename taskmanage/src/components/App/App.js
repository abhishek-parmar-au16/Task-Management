import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState({
    added: [],
    started: [],
    completed: [],
  });

  const handleTaskAdd = (task, category) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: [...prevTasks[category], task],
    }));
  };

  const handleTaskDelete = (taskId, category) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: prevTasks[category].filter((task) => task.id !== taskId),
    }));
  };

  const handleTaskMove = (taskId, fromCategory, toCategory) => {
    const taskToMove = tasks[fromCategory].find((task) => task.id === taskId);
    handleTaskDelete(taskId, fromCategory);
    handleTaskAdd(taskToMove, toCategory);
  };

  return (
    <div className="app">
      <TaskForm onTaskAdd={handleTaskAdd} />
      <TaskList
        category="Added"
        tasks={tasks.added}
        onTaskDelete={handleTaskDelete}
        onTaskMove={handleTaskMove}
      />
      <TaskList
        category="Started"
        tasks={tasks.started}
        onTaskDelete={handleTaskDelete}
        onTaskMove={handleTaskMove}
      />
      <TaskList
        category="Completed"
        tasks={tasks.completed}
        onTaskDelete={handleTaskDelete}
        onTaskMove={handleTaskMove}
      />
    </div>
  );
};

export default App;
