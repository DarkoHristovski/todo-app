import "./App.css";
import Todo from "./components/todo/Todo";
import Aside from "./components/aside/Aside";
import Modal from "./components/modal/Modal";
import { useId } from "react-id-generator";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([
    {id:'1', name: "Learning HTML", description: "Learning new skills", done: true },
    {id:'2', name: "CSS", description: "Learning new lectures", done: true },
    {
      id:'4',
      name: "Responsive design",
      description: "Learning new skills",
      done: true,
    },
    { id:'5',name: "Git", description: "Learning new skills", done: true },
    { id:'6',name: "JavaScript I", description: "Learning new skills", done: true },
    { id:'7',name: "JavaScript II", description: "Learning new skills", done: false },
  ]);
  const [showModal, setShowModal] = useState(false);

  const [taskId] = useId();

  const openModal = () => {
    setShowModal(true);
  };

  const addTaskHandler = (newState) =>{
    setTodoItems(state=>[
    ...state,
    newState
    ])
  }

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <main>
        {showModal && <Modal addTaskHandler={addTaskHandler} closeModal={closeModal} />}
        <Todo todo={todoItems} />
      </main>
      <Aside openModal={openModal} />
    </div>
  );
}

export default App;
