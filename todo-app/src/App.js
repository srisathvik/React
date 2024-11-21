// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
// import Input from "./components/Input";
import ReturnElement from "./components/ReturnElement";
import Input from "./components/Input";
// import Todos from "./"

function App() {
  const[todos, setTodos] = useState([])
  const[currentDisplay, setCurrentDisplay] = useState("todos");
  const[editID, setEditID] = useState(undefined);
  // console.log(todos);
  function replaceItem(todo) {
    let temp = todos.map((item) =>{
      if(item.id === todo.id){
        return todo;
      }
      return item;
    });
    setTodos([...temp]);
    // setCurrentDisplay("todos");
    // setEditID(undefined);
  }
  function handleSubmit(todo) {
    if(todo.id !== undefined){
      replaceItem(todo);
    }
    else{
      todo.id = todos.length;
      setTodos(
        [
          todo,
          ...todos
        ]
      );
    }
    
    setCurrentDisplay("todos");
    setEditID(undefined);
  }
  function handleEdit(item){
    // console.log(item);
    setEditID(item);
  }

  function handleDelete(id) {
    let temp = todos.filter((item) => item.id !== id);
    // console.log(temp);
    setTodos(temp);
  }
  function handleButton(){
    if(currentDisplay === "todos"){
      setCurrentDisplay("newTodo")
    }
    else if(currentDisplay === "newTodo"){
      setCurrentDisplay("todos");
    }
  }
 if(editID){
 
  return(
    <>
      <Input item={editID} addTodo={handleSubmit}/>
      <button onClick={() =>{setEditID(undefined)}}>cancel</button>
    </>
    
  )
 }
  return (
    <>
            <button onClick={handleButton}>{currentDisplay === "todos" ? "Add Item" : "Todos" }</button>
            <ReturnElement required={currentDisplay} todos={todos} addTodo={handleSubmit} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
    
    // <Input addTodo={handleSubmit}/>
  );
}

export default App;
