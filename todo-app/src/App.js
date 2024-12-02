
import { createContext, useEffect, useState } from "react";
// import Input from "./components/Input";
import ReturnElement from "./components/ReturnElement";
import Input from "./components/Input";
// import Todos from "./"
// import apiService from "./apiService";
import apis from "../src/apiService";
// import apiService from "../src/apiService";

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
  // console.log(todos);
  // const[data, setData] = useState();
  const[shouldFetch, setShouldFetch] = useState(true);
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
  
  // let body = {
  //         "Id": 1,
  //         "title": "Study",
  //         "description": "study for half hour",
  //         "completed": true
  //       }
  // // console.log(apis.post);
  // // console.log(body);
  // async function test() {
  //   const temp = await apis.post(body);
  //   // console.log(temp);
  //   if(temp.statusCode === "201"){
  //     console.log("fetch data");
  //     console.log(temp);
  //   }
  // }
  // test();
  // console.log(temp);
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
  async function handleSubmit(todo) {
    // console.log(todo);
    if(todo.taskId){
      // replaceItem(todo);
      // console.log("update called");
      const res = await apis.put(todo);
      // console.log(res);
      
    }
    else{
      todo.Id = todos.length;
      // setTodos(
      //   [
      //     todo,
      //     ...todos
      //   ]
      // );
      // console.log(todo);
      const res = await apis.post(todo);
      // console.log(res);
    }
    setShouldFetch(true);
    setCurrentDisplay("todos");
    setEditID(undefined);
  }
  function handleEdit(item){
    // console.log(item);
    setEditID(item);
  }

  async function handleDelete(id) {
    // let temp = todos.filter((item) => item.id !== id);
    // console.log(id);
    const res = await apis.delete(id);
    setShouldFetch(true);
    // console.log(temp);
    // setTodos(temp);
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
    remove: handleDelete
  }
 if(editID){
 
  return(
    <ItemsContext.Provider value={ctxValue}>

      <Input item={editID} addTodo={handleSubmit}/>
      <button onClick={() =>{setEditID(undefined)}}>cancel</button>

    </ItemsContext.Provider>
    
  )
 }
 
  return (
    <ItemsContext.Provider value={ctxValue}>

      <button onClick={handleButton}>{currentDisplay === "todos" ? "Add Item" : "Todos" }</button>
      <ReturnElement required={currentDisplay} todos={todos} addTodo={handleSubmit} handleDelete={handleDelete} handleEdit={handleEdit} />

    </ItemsContext.Provider>
    
    // <Input addTodo={handleSubmit}/>
  );
}

export default App;
