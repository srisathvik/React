import { useContext } from "react"
import { ItemsContext } from "../App"
export default function Todo({item}){
    const {edit, remove } = useContext(ItemsContext);
    // console.log(item);
    return (
        <>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => {edit(item)}}>Edit</button>
            <button onClick={() => {remove(item.taskId)}}>Delete</button>
        </>
    )
}