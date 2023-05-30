import { useState} from "react";
import * as taskService from "../services/taskService";
import classes from "./AddNewTask.module.css";


const EditTask = ({ task, editTaskHandler, closeClickHandler}) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.name);
    setInputValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let newObj = {
      id: task.id,
      ...inputValue,
    };

    taskService.updateTask(task.id, newObj);
    editTaskHandler(task.id, newObj);
  };

  return (
    <div className={classes["overlay"]}>
      <div className={classes["form-wrapper"]}>
        <p className={classes["title-form-wrapper"]}>Edit a Task</p>
        <form className={classes.form} onSubmit={submitHandler}>
          <label className={classes["form-label"]} htmlFor="task-title">
            Title
          </label>
          <input
            name="name"
            placeholder="e.g, study for the test"
            className={classes["task-title"]}
            type="text"
            id="task-title"
            defaultValue={task.name}
            onChange={changeHandler}
          />
          <label className={classes["form-label"]} htmlFor="task-description">
            Description
          </label>
          <textarea
            placeholder="e.g, study for the test"
            className={classes["task-description"]}
            name="description"
            id="task-description"
            cols="30"
            rows="5"
            defaultValue={task.description}
            onChange={changeHandler}
          ></textarea>
          <button className="btn" type="submit">
            Save the Task
          </button>
          <button onClick={closeClickHandler} className="btn btn-close" type="button">
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
