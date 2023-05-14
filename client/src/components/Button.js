import classes from './Button.module.css'

const Button = (props) =>{

    

    return(
        <button onClick={props.clickButtonHandler} type='button' className={`${classes['btn-new-task']}`}>Add new Task</button>
    )
}
export default Button