import Todo from "./Todo";
import { ItemsContext } from "../App";
import { useContext } from "react";
import "./todos.css";

export default function Todos() {
    const{items} = useContext(ItemsContext);
    console.log(items);
    if(items.length === 0){
        return <h1>No Pending Tasks</h1>
    }

    let activeTodos = items.filter((item) => item.completed === false);
    let completedTodos = items.filter((item) => item.completed === true);
    return(
        <>
        <div className="todos-container">
            <div className="active-todos">
                <h3>Active Todos: </h3>
                <ul>
                {activeTodos.map((item) => <Todo item={item} key={item.taskId} /> )}
                </ul>
            </div>
            <div className="completed-todos">
                <h3>completed Todos: </h3>
                <ul>{completedTodos.map((item) => <Todo item={item} key={item.taskId} />)}</ul>
            </div>
        </div>
            
            
        </>
        
    )
}