import Spinner from './Spinner';
import TodoInput from './TodoInput';
import classes from './TodoItems.module.css'
import TodoList from './TodoList';



const TodoItems = (props,loader) => {
console.log(loader)
return (
<section className={classes['todo-items-section']}>
{props.loading && <Spinner/>}
 <ul className={classes['list-wrapper']}>
{props.task.map(x=>  <TodoList  {...x}/>)}
</ul>
</section>
);
}

export default TodoItems