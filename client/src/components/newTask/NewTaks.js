import Card from "../../UI/Card";
import addIcon from "../../icons/writing-icon.svg";
import closeIcon from "../../icons/close-icon.svg";
import Modal from "../modal/Modal";
import { useState } from "react";
import { useId } from "react-id-generator";

const NewTask = (props) => {

const [taskValue, setTaskValue]= useState('');
const[descriptionValue, setDescriptionValue] = useState('');
const [taskId] = useId();

const onSubmit=(e)=>{
    e.preventDefault();
    console.log(taskValue)
    console.log(descriptionValue)
    const newObj={
        id:taskId,
        name:taskValue,
        description:descriptionValue,
        done: false
    }

    props.addTaskHandler(newObj)
}
console.log(props.closeModal)

  return (
      <Modal onClose={props.closeModal}>
        <form onSubmit={onSubmit}>
          <input type="text" value={taskValue} onChange={(e)=>setTaskValue(e.target.value)} id="task" name="task" placeholder="Task name" />
          <textarea
            name="description"
            value={descriptionValue}
            placeholder="Task description"
            id="description"
            cols="20"
            rows="10"
            onChange={(e)=>setDescriptionValue(e.target.value)}
          ></textarea>
          <button type="submit">Add a Task</button>
        </form>
      </Modal>
   
  );
};

export default NewTask;
