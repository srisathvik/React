import Input from "./Input"
import Todos from "./Todos"

export default function ReturnElement({required, todos, addTodo, handleDelete, handleEdit}) {
    // console.log(handleDelete);
    if(required === "todos"){
        return <Todos items={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
    }
    if(required === "newTodo"){
        return <Input addTodo={addTodo} />
    }
}   