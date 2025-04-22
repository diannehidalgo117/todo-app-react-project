import { useEffect, useState } from "react";
import Headers from "./components/Headers";
import Greetings from "./components/Greetings";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CalendarView from "./components/CalendarView";
import AppLayout from "./components/AppLayout";
import TaskStats from "./components/TaskStats";
import { Task, NewTaskInput } from "./types/Task";

const App = () => {
  // TODO: Initialize empty tasks
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      // TODO: Remove the default tasks
      return [
        {
          id: 1,
          title: "Learn React",
          description:
            "Study React fundamentals including hooks, state management, and component lifecycle.",
          dueDate: "04/30/2025",
          priority: "high",
          status: "in-progress",
          createdAt: "2025-04-18"
        },
        {
          id: 2,
          title: "Build Todo App",
          description:
            "Create a fully functional todo application with React and Tailwind CSS.",
          dueDate: "05/15/2025",
          priority: "medium",
          status: "pending",
          createdAt: "2025-04-19"
        },
        {
          id: 3,
          title: "Learn Rust",
          description:
            "Explore Rust programming language for system-level development and WebAssembly applications.",
          dueDate: "07/11/2025",
          priority: "low",
          status: "pending",
          createdAt: "2025-04-20"
        }
      ];
    }
  });

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle adding a new task
  // This function is passed to the TaskForm component
  // and is called when the form is submitted
  const handleAddTask = (taskData: NewTaskInput) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now()
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <>
      <AppLayout
        header={<Headers />}
        greetings={<Greetings />}
        calendar={<CalendarView />}
        taskForm={<TaskForm onAddTask={handleAddTask} />}
        taskList={<TaskList tasks={tasks} setTasks={setTasks} />}
        taskStats={<TaskStats tasks={tasks} />}
      />
    </>
  );
};

export default App;
