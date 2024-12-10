
import { createContext, useEffect, useState } from "react";
import ReturnElement from "./components/ReturnElement";
import Input from "./components/Input";
import apis from "./apiService";
import "./app.css";



export const ItemsContext = createContext({
  items: [],
  currentDisplay: "",
  editItem: null,
  submit: ()=>{},
  edit: ()=>{},
  remove: ()=>{},

})
function App() {


  const[todos, setTodos] = useState([])
  const[currentDisplay, setCurrentDisplay] = useState("todos");
  const[editID, setEditID] = useState(undefined);
  const[shouldFetch, setShouldFetch] = useState(true);
  const[showModal, setShowModal] = useState(false);
  useEffect(() =>{
    async function  getData() {
     const values = await apis.get();
     setTodos(await values);
     setShouldFetch(false);
    }
    if(shouldFetch){
      getData();
    }

  }, [shouldFetch])
  console.log(todos);
  
  async function handleSubmit(todo) {
    if(todo.taskId){
      const res = await apis.put(todo);
      
    }
    else{
      todo.Id = todos.length;
      const res = await apis.post(todo);
    }
    setShouldFetch(true);
    setCurrentDisplay("todos");
    setEditID(undefined);
  }
  function handleEdit(item){
    setEditID(item);
  }

  async function handleDelete(id) {

    const res = await apis.delete(id);
    setShouldFetch(true);
  }
  function handleButton(){
    if(currentDisplay === "todos"){
      setCurrentDisplay("newTodo")
    }
    else if(currentDisplay === "newTodo"){
      setCurrentDisplay("todos");
    }
  }

  const ctxValue = {
    items: todos,
    currentDisplay: currentDisplay,
    editItem: editID,
    submit: handleSubmit,
    edit: handleEdit,
    remove: handleDelete,
    showModal,
    setShowModal,
  }
 if(editID){
 
  return(
    <ItemsContext.Provider value={ctxValue}>
      <div className="container todo-app">
        <Input item={editID} addTodo={handleSubmit}/>
        {/* <button onClick={() =>{setEditID(undefined)}}>cancel</button> */}
      </div>
      
    </ItemsContext.Provider>
    
  )
 }
 
  return (
    <ItemsContext.Provider value={ctxValue}>
      <div className="container todo-app" onClick = {() =>{setShowModal(false)}}>
        <button onClick={handleButton}>{currentDisplay === "todos" ? "Add Item" : "Todos" }</button>
        <div className="todos">
            <ReturnElement required={currentDisplay} todos={todos} addTodo={handleSubmit} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
      </div>
    </ItemsContext.Provider>
    
  );
}

export default App;
