import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './TaskItem.css';

const TaskItem = ({ task, index, category, onTaskDelete, onTaskMove }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{task.title}</span>
          <button onClick={() => onTaskDelete(task.id, category)}>Delete</button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
