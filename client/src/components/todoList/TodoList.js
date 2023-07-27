import "./ToDoList.css";
import "../../UI/Card";
import Card from "../../UI/Card";
import editIcon from '../../icons/edit-icon.svg'
import deleteIcon from '../../icons/delete-icon.svg'
import importantIcon from '../../icons/important-icon.svg'

const TodoList = (props) => {
  return (
    <Card className="todo-card">
      <div>
        <div className="card-top">
        <h2>{props.content.name}</h2>
        <p>{props.content.description}</p>
        </div>
        <div className="card-bottom"> 
        <div className="button-group">
        <img className="icon" src={importantIcon} alt="" />
          <img className="icon" src={editIcon} alt="" />
          <img className="icon" src={deleteIcon} alt="" />
        </div>
        </div>
      </div>
    </Card>
  );
};

export default TodoList;
