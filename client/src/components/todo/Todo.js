import "./Todo.css";
import "../todoList/TodoList.js";
import TodoList from "../todoList/TodoList.js";

const Todo = (props) => {
  return (
    <div className="todo-section">
         <div className="todo-section-wrapper">
      {props.todo.map(x=>  <TodoList key={x.id} content={x} />)}
      </div>
    </div>
  );
};

export default Todo;
