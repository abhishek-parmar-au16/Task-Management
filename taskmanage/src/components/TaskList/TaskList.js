import React from 'react';
import { Droppable  ,DragDropContext} from 'react-beautiful-dnd';
import TaskItem from '../TaskItem/TaskItem';
// import './TaskList.css';

const TaskList = ({ category, tasks, onTaskDelete, onTaskMove }) => {
  return (
    <div className="task-list">
      <h2>{category}</h2>
      <DragDropContext>
      <Droppable droppableId={category}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <TaskItem
                key={task.id}
                index={index}
                task={task}
                category={category}
                onTaskDelete={onTaskDelete}
                onTaskMove={onTaskMove}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
