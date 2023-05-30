import Spinner from './Spinner';
import classes from './TodoItems.module.css'
import TodoList from './TodoList';
import { useState } from 'react'
import * as taskService from '../services/taskService'
import TaskAction from '../components/UserListConstants'
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';




const TodoItems = (props,loader) => {
   const [taskAction, setTaskAction]=useState({
        task:null,
        action:null,
      })

const taskActionClickHandler = (id, actionType) =>{
        taskService.getOne(id)
        .then(task=>{
            setTaskAction({
                task,
                action:actionType
            })
        })
    }
    
    const closeClickHandler = ()=>{
        setTaskAction({task:null})
    }

return (
<section className={classes['todo-items-section']}>
{taskAction.action === TaskAction.Edit && <EditTask closeClickHandler={closeClickHandler} editTaskHandler={props.editTaskHandler} task={taskAction.task} />}
{taskAction.action === TaskAction.Delete && <DeleteTask closeClickHandler={closeClickHandler} closeClick={props.clickCloseHandler} task={taskAction.task}/>}
{props.loading && <Spinner/>}
 <ul className={classes['list-wrapper']}>
{props.task.map(x=>  <TodoList key={x.id} detailsHandler={taskActionClickHandler}  {...x}/>)}
</ul>
</section>
);
}

export default TodoItems