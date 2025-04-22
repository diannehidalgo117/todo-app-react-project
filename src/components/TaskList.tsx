import { Dispatch, SetStateAction } from "react";
import { Task } from "../types/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

// TODO: Add edit, delete, and done functionality

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 overflow-y-auto max-h-screen">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-rose-600">My Tasks</h2>
        <div className="flex space-x-2">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm py-1 px-3 rounded-md transition-colors">
            All
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm py-1 px-3 rounded-md transition-colors">
            Active
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm py-1 px-3 rounded-md transition-colors">
            Completed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            priority={task.priority}
            status={task.status}
            createdAt={task.createdAt}
          />
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="flex flex-col items-center justify-center py-8">
          <p className="text-center text-gray-500">No tasks available</p>
          <p className="text-center text-gray-400 text-sm mt-1">
            Add a new task to get started!
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
