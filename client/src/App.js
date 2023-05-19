import logo from "./logo.svg";
import "./App.css";
import TodoItems from "./components/TodoItems";
import FilterTasks from "./components/FilterTasks";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import AddNewTask from "./components/AddNewTask";
import Button from "./components/Button";

function App() {
  const [tasks, setTasks] = useState([]);
  const[loading, setLoading]= useState(true)
  const [showModal, setShowModal]= useState(false)
  

  const url =
    "https://todo-app-7ea63-default-rtdb.europe-west1.firebasedatabase.app/.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setTasks(Object.values(result.tasks));
        setLoading(false)
      });
  }, []);





  const addTaskHandler = (taskObject)=>{
    setTasks(prevState=> [...prevState, taskObject])
  setShowModal(false)
  }
  
  const clickButtonHandler=()=>{
    setShowModal(true);
  }

  return (
    <main className="App">
 <Button clickButtonHandler={clickButtonHandler} />
     {showModal && <AddNewTask addTaskHandler={addTaskHandler} />}
      <Spinner />
      <TodoItems task={tasks} loading={loading}></TodoItems>
      <FilterTasks />
    </main>
  );
}

export default App;
