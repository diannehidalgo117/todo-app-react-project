import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  // TODO: Delete the dummy data

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description:
        "Study React fundamentals including hooks, state management, and component lifecycle.",
      dueDate: "04/30/2025",
      priority: "high",
      status: "in-progress"
    },
    {
      id: 2,
      title: "Build Todo App",
      description:
        "Create a fully functional todo application with React and Tailwind CSS.",
      dueDate: "05/15/2025",
      priority: "medium",
      status: "pending"
    },
    {
      id: 3,
      title: "Learn Rust",
      description:
        "Explore Rust programming language for system-level development and WebAssembly applications.",
      dueDate: "07/11/2025",
      priority: "low",
      status: "pending"
    },
    {
      id: 4,
      title: "Learn Python",
      description:
        "Study Python for data science and machine learning applications.",
      dueDate: "07/11/2025",
      priority: "low",
      status: "pending"
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">My Tasks</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            priority={task.priority}
            status={task.status}
          />
        ))}
      </div>
      {tasks.length === 0 && (
        <p className="mt-8 text-center text-slate-500">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
