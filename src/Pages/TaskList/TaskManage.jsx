import { useEffect, useState } from "react";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import TaskList from "./TaskList";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ManageTasks = () => {
    const axiosPublic = useAxiosPublic();
    const [tasks, setTasks] = useState([]);
    // console.log(tasks);
    useEffect(() => {
        const fetchAllTasks = async () => {
            const res = await axiosPublic.get('/tasks');
            setTasks(res.data);
        };
        fetchAllTasks();
    }, [axiosPublic]);

    return (
        <DndProvider backend={HTML5Backend}>
          <div className="mx-auto py-0">
            <div className="bg-gradient-to-b from-amber-500 to-yellow-500 p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-semibold text-white mb-2">
                To-Do Tasks
              </h1>
              <div className="h-1 w-full bg-white mb-4"></div>
              <TaskList tasks={tasks} setTasks={setTasks} />
            </div>
          </div>
        </DndProvider>
      );
    };

export default ManageTasks;
