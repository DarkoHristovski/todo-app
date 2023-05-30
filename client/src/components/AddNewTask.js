import classes from "./AddNewTask.module.css";
import { useState} from "react";
import * as TaskService from '../services/taskService'
import closeIcon from '../icons/close-icon.svg'

const AddNewTask = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setInputDescription(event.target.value);
  };

  const inputSubmitHandler = (event) => {
    event.preventDefault();

    if (inputTitle !== "") {
      const inputObjects = {
        name: inputTitle,
        description: inputDescription,
        id: Math.floor(Math.random() * 999),
      };
      props.addTaskHandler(inputObjects);
      TaskService.CreateTask(inputObjects)
    }
  };

  return (
    <div className={classes["overlay"]}>
      <div className={classes["form-wrapper"]}>
      <div className="close-btn"><img src={closeIcon} alt="" /></div>
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
          <button
            onClick={props.clickCloseHandler}
            className="btn btn-close"
            type="button"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
