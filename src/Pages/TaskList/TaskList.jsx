import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const TaskList = () => {
  const axiosPublic = useAxiosPublic();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosPublic.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [axiosPublic]);

  const moveTask = async (taskId, fromStatus, toStatus) => {
    try {
      // Make a request to update the task status in the backend
      await axiosPublic.put(`/tasks/${taskId}`, { status: toStatus });
    } catch (error) {
      console.error('Error updating task status:', error);
      // Handle the error as needed
      return;
    }

    // Update the task status in the local state
    const updatedTasks = tasks.map((task) => {
      if (task._id === taskId) {
        return { ...task, status: toStatus };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-8">
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="flex-1">
              <h2 className="text-xl font-bold mb-4">To-Do</h2>
              {tasks.map((task, index) => (
                task.status === 'todo' && (
                  <TaskItem key={task._id} task={task} index={index} moveTask={moveTask} />
                )
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="ongoing">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="flex-1">
              <h2 className="text-xl font-bold mb-4">Ongoing</h2>
              {tasks.map((task, index) => (
                task.status === 'ongoing' && (
                  <TaskItem key={task._id} task={task} index={index} moveTask={moveTask} />
                )
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="completed">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="flex-1">
              <h2 className="text-xl font-bold mb-4">Completed</h2>
              {tasks.map((task, index) => (
                task.status === 'completed' && (
                  <TaskItem key={task._id} task={task} index={index} moveTask={moveTask} />
                )
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

const TaskItem = ({ task, index, moveTask }) => {
  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.id, draggedItem.status, task.status);
        draggedItem.index = index;
      }
    },
  });

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          ref={(ref) => {
            drop(ref);
            provided.innerRef(ref);
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-${getBackgroundColor(task.status)} p-4 mb-2`}
        >
          <p>{task.title}</p>
          <p>{task.description}</p>
        </div>
      )}
    </Draggable>
  );
};

const getBackgroundColor = (status) => {
  switch (status) {
    case 'todo':
      return 'gray-200';
    case 'ongoing':
      return 'yellow-200';
    case 'completed':
      return 'green-200';
    default:
      return 'white';
  }
};

export default TaskList;
