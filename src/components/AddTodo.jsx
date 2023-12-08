import { MdAddBox } from "react-icons/md";
import {useState ,useRef} from "react";
function AddTodo({onNewItem}){
// const [todoName, setTodoIName] = useState('');
// const [dueDate, setDueDate] = useState('');
const todoNameElement = useRef();
const dueDateElement = useRef();


/*
const handleNameChange = (event) => {
setTodoIName(event.target.value);

}

const handleDateChange = (event) => {
 setDueDate(event.target.value);

}
*/
const handelAddButtonClicked = (event) => {
  event.preventDefault();
  const todoName = todoNameElement.current.value;
  const dueDate = dueDateElement.current.value;
  todoNameElement.current.value="";
  dueDateElement.current.value = "";
onNewItem(todoName,dueDate);
// setDueDate("");
// setTodoIName("");


}


return ( 
<div className="container text-center"> 
 <form className="row   " onSubmit={handelAddButtonClicked} >



<div className="col-6">
<input type="text"  ref={todoNameElement}  placeholder="Enter Todo Here"
// value={todoName}
//  onChange={handleNameChange} 
  />
</div>
  <div className="col-4">
    <input type="date" ref={dueDateElement}  
    // value={dueDate} 
    // onChange={handleDateChange}

    />
  </div>
  <div className="col-2">
  <button type="submit" className="btn btn-success  "   > <MdAddBox /></button>
  </div>

  </form>
</div>
 );
}

export default AddTodo;