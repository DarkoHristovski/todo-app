import logo from "./logo.svg";
import "./App.css";
import TodoItems from "./components/TodoItems";
import FilterTasks from "./components/FilterTasks";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [tasks, setTasks] = useState([]);
  const[loading, setLoading]= useState(true)


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


  return (
    <main className="App">
      <FilterTasks />
      <Spinner />
      <TodoItems task={tasks} loading={loading}></TodoItems>
    </main>
  );
}

export default App;
