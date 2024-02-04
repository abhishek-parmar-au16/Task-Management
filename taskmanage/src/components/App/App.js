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
      console.log("task1",task);
      console.log("task2",category);
  setTasks((prevTasks) => {
    console.log("task3",prevTasks);
    const updatedTasks = {
      ...prevTasks,
      [category]: [...prevTasks[category], task],
    };
    return updatedTasks;
  });
};

  const handleTaskDelete = (taskId, category) => {
    console.log("Task1",taskId);
    console.log("Task2",category);
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
        category="added"
        tasks={tasks.added}
        onTaskDelete={handleTaskDelete}
        onTaskMove={handleTaskMove}
      />
      <TaskList
        category="started"
        tasks={tasks.started}
        onTaskDelete={handleTaskDelete}
        onTaskMove={handleTaskMove}
      />
      <TaskList
        category="completed"
        tasks={tasks.completed}
        onTaskDelete={handleTaskDelete}
        onTaskMove={handleTaskMove}
      />
    </div>
  );
};

export default App;
