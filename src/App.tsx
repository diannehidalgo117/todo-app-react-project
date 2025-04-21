import Headers from "./components/Headers";
import Greetings from "./components/Greetings";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CalendarView from "./components/CalendarView";

const App = () => {
  return (
    <>
      <Headers />
      <Greetings />
      <CalendarView />
      <TaskForm />
      <TaskList />
    </>
  );
};

export default App;
