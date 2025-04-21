import Headers from "./components/Headers";
import Greetings from "./components/Greetings";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <>
      <Headers />
      <Greetings />
      <TaskForm />
      <TaskList />
    </>
  );
};

export default App;
