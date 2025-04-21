import { useState } from "react";
import Headers from "./components/Headers";
import Greetings from "./components/Greetings";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CalendarView from "./components/CalendarView";
import AppLayout from "./components/AppLayout";
import TaskStats from "./components/TaskStats";

const App = () => {
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
    <>
      <AppLayout
        header={<Headers />}
        greetings={<Greetings />}
        calendar={<CalendarView />}
        taskForm={<TaskForm />}
        taskList={<TaskList tasks={tasks} setTasks={setTasks} />}
        taskStats={<TaskStats tasks={tasks} />}
      />
    </>
  );
};

export default App;
