import "./Todo.css";
import "../todoList/TodoList.js";
import TodoList from "../todoList/TodoList.js";

const Todo = () => {
  return (
    <div className="todo-section">
      <TodoList />
    </div>
  );
};

export default Todo;
