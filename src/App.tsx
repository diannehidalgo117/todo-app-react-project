import { useEffect, useState } from "react";
import { Task, NewTaskInput } from "./types/Task";
import Headers from "./components/Headers";
import Greetings from "./components/Greetings";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CalendarView from "./components/CalendarView";
import AppLayout from "./components/AppLayout";
import TaskStats from "./components/TaskStats";
import { formatToYYYYMMDD, convertFromMMDDYYYY } from "./utils/dateUtils";

const App = () => {
  // Initialize tasks from localStorage or use default tasks
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      // Load tasks from localStorage, but convert any old MM/DD/YYYY to YYYY-MM-DD
      const parsedTasks = JSON.parse(savedTasks);
      return parsedTasks.map((task: Task) => ({
        ...task,
        dueDate: task.dueDate.includes("/")
          ? convertFromMMDDYYYY(task.dueDate)
          : task.dueDate
      }));
    } else {
      // Default tasks
      return [
        {
          id: 1,
          title: "Learn React",
          description:
            "Study React fundamentals including hooks, state management, and component lifecycle.",
          dueDate: "2025-04-30",
          priority: "high",
          status: "in-progress",
          createdAt: "2025-04-18"
        },
        {
          id: 2,
          title: "Build Todo App",
          description:
            "Create a fully functional todo application with React and Tailwind CSS.",
          dueDate: "2025-05-15",
          priority: "medium",
          status: "pending",
          createdAt: "2025-04-19"
        },
        {
          id: 3,
          title: "Learn Rust",
          description:
            "Explore Rust programming language for system-level development and WebAssembly applications.",
          dueDate: "2025-07-11", // YYYY-MM-DD format
          priority: "low",
          status: "pending",
          createdAt: "2025-04-20"
        }
      ];
    }
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  // Handle date selection from calendar
  const handleDateSelect = (date: Date) => {
    console.log("handleDateSelect called with:", date);
    setSelectedDate(date);
  };

  // Filter tasks whenever selectedDate changes
  useEffect(() => {
    if (selectedDate) {
      // Convert selectedDate to YYYY-MM-DD format for filtering
      const formattedSelectedDate = formatToYYYYMMDD(selectedDate);

      console.log("Filtering by date:", formattedSelectedDate);

      // Filter tasks with matching dueDate in YYYY-MM-DD format
      const filtered = tasks.filter((task) => {
        return task.dueDate === formattedSelectedDate;
      });

      setFilteredTasks(filtered);
      console.log("Filtered tasks count:", filtered.length);
    } else {
      // If no date selected, show all tasks
      setFilteredTasks(tasks);
    }
  }, [selectedDate, tasks]);

  // Reset filters
  const clearDateFilter = () => {
    console.log("Clearing date filter");
    setSelectedDate(null);
  };

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle adding a new task
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
        calendar={<CalendarView onDateSelect={handleDateSelect} />}
        taskForm={<TaskForm onAddTask={handleAddTask} />}
        taskList={
          <TaskList
            tasks={filteredTasks}
            setTasks={setTasks}
            isFiltered={!!selectedDate}
            onClearFilter={clearDateFilter}
          />
        }
        taskStats={<TaskStats tasks={tasks} />}
      />
    </>
  );
};

export default App;
