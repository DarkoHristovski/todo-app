import Button from './Button';
import classes from './filterTasks.module.css'

const FilterTasks = (props) =>{
    return(
        <section className={classes['filter-tasks-section']}>
           <p>{'TO-DO LIST'}</p>
           <Button clickButtonHandler={props.clickButtonHandler} />
        </section>
    )
}

export default FilterTasks;