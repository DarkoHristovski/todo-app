import Button from './Button';
import classes from './filterTasks.module.css'

const FilterTasks = (props) =>{
console.log(props)
    return(
        <section className={classes['filter-tasks-section']}>
           <p>{'TO-DO LIST'}</p>
         
        </section>
    )
}

export default FilterTasks;