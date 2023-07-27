const AddTask = (props) =>{

    return(
        <div className="add-task-section">
        <button onClick={props.addButton} type="Submit">Add a Task</button>
        </div>
    )
}

export default AddTask