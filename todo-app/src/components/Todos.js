import Todo from "./Todo";
import { ItemsContext } from "../App";
import { useContext } from "react";

export default function Todos() {
    const{items} = useContext(ItemsContext);
    if(items.length === 0){
        return <h1>No Active TODOS</h1>
    }
    // console.log(items);
    let activeTodos = items.filter((item) => item.completed === false);
    let completedTodos = items.filter((item) => item.completed === true);
    // console.log(completedTodos);
    return(
        <>
            <h1>Active Todos: </h1>
            <ul>
            {activeTodos.map((item) => <Todo item={item} key={item.taskId} /> )}
            </ul>
            <h1>completed Todos: </h1>
            <ul>{completedTodos.map((item) => <Todo item={item} key={item.taskId} />)}</ul>
        </>
        
    )
}