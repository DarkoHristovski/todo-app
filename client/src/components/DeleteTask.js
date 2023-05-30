import classes from "./AddNewTask.module.css";

const DeleteTask = (props ,{closeClickHandler}) =>{

  console.log(closeClickHandler)

    return(
        <div className={classes["overlay"]}>
        <div className={classes["form-wrapper"]}>
          <p className={classes["title-form-wrapper"]}>Delete a Task</p>
        <div>Do you want to delete <b>{props.task.name}</ b> Task</div>
        <div className="bottom-wrapper">
        <button
         onClick={props.closeClickHandler}
         className="btn btn-close"
         type="button">
         Close
       </button>
       <button
         className="btn btn-delete"
         type="button"
       >
         Delete
       </button>
        </div>
    </div>
    </div>
    )
}

export default DeleteTask;