import "./App.css";
import TodoItems from "./components/TodoItems";
import FilterTasks from "./components/FilterTasks";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import AddNewTask from "./components/AddNewTask";
import * as userService from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  
  useEffect(() => {
    userService.getAll().then((result) => {
      setTasks(result);
      setLoading(false);
    });
  }, []);


   const addTaskHandler = (taskObject) => {
    setTasks((prevState) => [...prevState, taskObject]);
    setShowModal(false);
  };


  const editTaskHandler = (taskId, taskObject) => {
  setTasks(
  (prevState) => prevState.map((x) => (x.id === taskId ? taskObject : x)),
  taskObject
    );
    setShowModal(false);
  };


const clickButtonHandler = () => {
  setShowModal(true);
  };


  const clickCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <main className="App">
      {showModal && (
        <AddNewTask
          clickCloseHandler={clickCloseHandler}
          addTaskHandler={addTaskHandler}
        />
      )}
      <Spinner />
      <TodoItems
        clickCloseHandler={clickCloseHandler}
        editTaskHandler={editTaskHandler}
        task={tasks}
        loading={loading}
      />
      <FilterTasks clickButtonHandler={clickButtonHandler} />
    </main>
  );
}

export default App;
