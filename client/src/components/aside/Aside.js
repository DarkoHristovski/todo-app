import AddTask from '../addTask/AddTask'
import './Aside.css';

const Aside = (props) =>{
    return(
        <div className="aside">
          {  console.log(props.openModal)}
<AddTask addButton={props.openModal} />
        </div>
    )
}

export default Aside;