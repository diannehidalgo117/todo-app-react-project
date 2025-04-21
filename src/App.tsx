import Headers from "./components/Headers";
import Greetings from "./components/Greetings";
// import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

const App = () => {
  return (
    <>
      <Headers />
      <Greetings />
      {/* <TaskForm /> */}
      <TaskItem />
    </>
  );
};

export default App;
