import classes from './todoList.module.css'
import TaskAction from '../components/UserListConstants'
import deleteIcon from './../icons/delete-icon.svg'
import editIcon from './../icons/edit-icon.svg'
import importantIcon from './../icons/important-icon.svg'

const TodoList = (props) => {

  return (
    <>
<li className={classes['todo-list']}>
<div className={classes['todo-list-text-wrapper']}>
<p className={classes['todo-list-name']}>{props.name}</p> 
<p className={classes['todo-list-description']}>{props.description}</p>
</div>
<div className={classes['icon-wrapper']}>
<img className={classes.icon} src={importantIcon} alt="edit" />
<img onClick={()=>props.detailsHandler(props.id, TaskAction.Edit)} className={classes.icon} src={editIcon} alt="edit" />
 <img onClick={()=>props.detailsHandler(props.id, TaskAction.Delete)} className={classes.icon} src={deleteIcon} alt="del" />
        </div>
      </li>
    </>
  );
};

export default TodoList;
