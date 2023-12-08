import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";

import "./App.css";

import {useState} from "react";
import WelcomeMessage from "./components/WelcomMessage";
import item from "../../../18Fragments/learning-fragment/src/components/Item";

function App() {

// const initialTodoItem = [{
//   name: "Buy Milk",
//   dueDate : "23/11/2009",

// },

// {
//   name: "Buy Sys",
//   dueDate : "23/11/2009",

// },
// {
//   name: "Buy",
//   dueDate : "23/11/209",

// },

// ]

const [todoItems, setTodoItems] = useState([] );
const handleNewItem = (itemName, itemDueDate) =>{
  // console.log(`New Item Added: ${itemName} Date:${itemDueDate} `);
  const newTodoItems = [...todoItems,{ name: itemName, dueDate: itemDueDate},
  ];
  setTodoItems(newTodoItems);
}


const handleDeleteItem =(todoItemName) => {
  const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
  setTodoItems(newTodoItems);

}
  return (
<> 
   <center  
  className='todo-container'> 
<AppName/>
<AddTodo onNewItem={handleNewItem}/>
{todoItems.length === 0 && <WelcomeMessage ></WelcomeMessage>}
<TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} ></TodoItems>

</center>
</>



)
 
}

export default App;
