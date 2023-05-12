import classes from './Button.module.css'

const Button = (props) =>{
    return(
        <button type='button' className={`${classes['btn-new-task']}`}>Add new Task</button>
    )
}
export default Button