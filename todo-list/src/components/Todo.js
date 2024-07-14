import React,{useState, useEffect} from "react"
import ReactDOM from "react-dom"
import "../style.css"

export default function Todo(){
    const[todos, setTodos] = useState([])
    const[inputValue, setInputValue] = useState("")
    const[check, setCheck] = useState([])
    const[edit, setEdit] = useState(false)
    const [editingText, setEditingText] = useState("");
    // useEffect(()=>{
    //     setTodos(todos)
    // }, [])
    function handleChange(event){
        setInputValue(event.target.value)
        // console.log(inputValue)
    }
    function handleSubmit(event){
        event.preventDefault()
        if (inputValue)
       {
            setTodos([...todos, {value:inputValue, check:false, edit: false}])
            // setCheck([...check, true])
            setInputValue("")
        }
    }
    function handleDelete(index){
        // console.log(todos,index, todos.splice)
        const newTodo = todos.slice(0, index).concat(todos.slice(index+1))
        setTodos(newTodo)
    }
    function handleEdit(item){
        // const newTodo = todos.filter((todo) => {
        //     console.log(todo, item)
        //     return item.value != todo.value
        // });
        // setTodos(newTodo)
        // console.log(item)
        // setInputValue(item.value);
        console.log(item)
        // item.edit = !item.edit
        if(item.edit){
            item.value = editingText

        }
        else{
            setEditingText(item.value)
        }
        const newTodo = todos.filter((todo) => {
            // console.log(todo, item)
            // return item.value != todo.value
            if (item.value == todo.value){
                todo.edit = ! todo.edit
            }
            return true;
        });
        console.log(newTodo)
        setTodos(newTodo)

        
    }
    function handleTask(e){
        console.log(e)
    }
    // console.log(todos)
    function Todo(props){
        return (
            <div>
                {props}
            </div>
        )
    }
    function handleCheck({todo, index}){
        const newTodos = [...todos]
        newTodos[index].check = !newTodos[index].check
        setTodos(newTodos)
        
        
    }
    return(
        <div className="App">
            <h1>Todo App</h1>
            <form className="input-wrapper">
                <input className="text" type = "text" name="key"  value={inputValue} onChange={handleChange}/>
                <button onClick={handleSubmit} className="add-button">Add Todo</button>
            </form>
            {todos?.length > 0 ? (
                <ul className="todo-list">
                {todos.map((todo, index)=>(
                    <div className="todo">
                         {console.log(todo)}
                        
                        <li key={index} className={todo.check ? "strike" : undefined}>
                            <input type="checkbox" checked={todo.check} onClick={() =>{handleCheck({todo, index})}} />

                            {todo.edit === true ? (
                                <input
                                    value={editingText}
                                    type="text"
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                ) : (
                                <div>{Todo(todo.value)}</div>
                                )}
                            {/* {Todo(todo.value)} */}
                        <div>
                            <button className="edit-button" onClick={() =>{handleEdit(todo)}}>{todo.edit? "Save" : "Edit"}</button> 
                            <button onClick={() =>{handleDelete(index)}} className="delete-button">Delete</button>
                            {/* <button onClick={() =>{handleCheck({todo, index})}} className="delete-button">checkbox</button> */}
                        </div>
                        {/* <input type="text" value={todo.value} className="textInput" /> */}
                        </li>
                    </div>
                ))}
            </ul>
            ) : (
                <div className="empty">
                    <p>No task found</p>
                </div>
            )}

        </div>
    )
}