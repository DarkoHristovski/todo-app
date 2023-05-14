import classes from './AddNewTask.module.css';
import { useState, useEffect } from "react";

const AddNewTask = (props) =>{
    return(
        <div className={classes['overlay']}>
           <div className={classes['form-wrapper']}>
            <p className={classes['title-form-wrapper']}>Add a Task</p>
           <form className={classes.form} onSubmit={props.addTaskHandler}>
            <label className={classes['form-label']} htmlFor="task-title">Title</label>
             <input value={props.inputTitle} onChange={props.titleChangeHandler} placeholder='e.g, study for the test' className={classes['task-title']} type="text" id='task-title' />
             <label className={classes['form-label']} htmlFor="task-description">Description (optional)</label>
             <textarea onChange={props.descriptionChangeHandler} placeholder='e.g, study for the test' className={classes['task-description']}  name="" id="task-description" cols="30" rows="5"></textarea>
                <button className='btn'  type='submit'>Add a Task</button>
          </form>
           </div>
        </div>
    )
}

export default AddNewTask;