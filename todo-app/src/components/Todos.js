import Todo from "./Todo";

export default function todos({items, handleDelete, handleEdit}) {
    if(items.length === 0){
        return <h1>No Active TODOs</h1>
    }
    console.log(items);
    let activeTodos = items.filter((item) => item.completed === "off");
    let completedTodos = items.filter((item) => item.completed === "on");
    return(
        <>
            <h1>Active Todos: </h1>
            <ul>
            {activeTodos.map((item) => <Todo item={item} key={item.id} handleDelete={handleDelete} handleEdit={handleEdit}/> )}
            </ul>
            <h1>completed Todos: </h1>
            <ul>{completedTodos.map((item) => <Todo item={item} key={item.id} handleDelete={handleDelete} handleEdit={handleEdit}/>)}</ul>
        </>
        
    )
}