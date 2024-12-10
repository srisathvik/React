import { useContext, useState } from "react"
import { ItemsContext } from "../App"
import Modal from "./Modal";
import "./todos.css";
export default function Todo({item}){
    const {edit, remove, submit,showModal, setShowModal } = useContext(ItemsContext);
    // const[showModal, setShowModal] = useState(false);
    console.log(item);

    function handleComplete(){
        const updatedTodo = {
            ...item,
            completed: !item.completed
        }
        submit(updatedTodo);
    }

    return (
        <>
            <div className="todo-container">
                <input type="checkbox" id="completed" name="completed" defaultChecked = {item?.completed === true } onClick={handleComplete}/>
                <h3 className={item.completed === true? "completed-title": null}>{item.title}</h3>
                {/* <p>{item.description}</p> */}
                <button onClick={(e) => { 
                    e.stopPropagation();
                    setShowModal(true) }}>...</button>
                <Modal 
                    openModal={showModal} 
                    closeModal={() => {setShowModal(false)}}
                    item={item}
                    >
                </Modal>
                <button onClick={() => {edit(item)}}>Edit</button>
                <button onClick={() => {remove(item.taskId)}} className="delete-button">Delete</button>
            </div>
            
        </>
    )
}