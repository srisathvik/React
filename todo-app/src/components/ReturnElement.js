import Input from "./Input"
import Todos from "./Todos"

export default function ReturnElement({required}) {
    // console.log(handleDelete);
    if(required === "todos"){
        return <Todos />
    }
    if(required === "newTodo"){
        return <Input />
    }
}   