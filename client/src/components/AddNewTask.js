import classes from "./AddNewTask.module.css";
import { useState, useEffect } from "react";



const AddNewTask = (props) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    
    const titleChangeHandler = (event) =>{
        setInputTitle(event.target.value)
      }
      
      const descriptionChangeHandler = (event) =>{
        setInputDescription(event.target.value)
      }

      const inputSubmitHandler = (event) => {
      event.preventDefault();

      if(inputTitle !== ''){
        const inpuObjects={
            name:inputTitle,
            description: inputDescription,
            id:Math.floor(Math.random() * 999)
         }
         props.addTaskHandler(inpuObjects)
      }
      
      }


  return (
    <div className={classes["overlay"]}>
      <div className={classes["form-wrapper"]}>
        <p className={classes["title-form-wrapper"]}>Add a Task</p>
        <form className={classes.form} onSubmit={inputSubmitHandler}>
          <label className={classes["form-label"]} htmlFor="task-title">
            Title
          </label>
          <input
            value={inputTitle}
            onChange={titleChangeHandler}
            placeholder="e.g, study for the test"
            className={classes["task-title"]}
            type="text"
            id="task-title"
          />
          <label className={classes["form-label"]} htmlFor="task-description">
            Description (optional)
          </label>
          <textarea
           value={inputDescription}
            onChange={descriptionChangeHandler}
            placeholder="e.g, study for the test"
            className={classes["task-description"]}
            name=""
            id="task-description"
            cols="30"
            rows="5"
          ></textarea>
          <button className="btn" type="submit">
            Add a Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
