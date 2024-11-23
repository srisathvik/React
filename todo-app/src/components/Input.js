import { useContext } from "react";
import { ItemsContext } from "../App";

export default  function Input() {
    const{editItem, submit} = useContext(ItemsContext);
    const item = editItem;
    const addTodo = submit;
    // console.log(addTodo);
   function handleSubmit(e){
    e.preventDefault();
    let data = new FormData(e.target);
    const formObject = Object.fromEntries(data.entries());
    console.log(formObject);
    if(formObject.completed === undefined){
        formObject.completed = "off";
        console.log(formObject);
    }
    if(item){
        
        formObject.id = item.id;
        console.log(formObject);
        // formObject.completed = item.completed;
    }
    // console.log(formObject);
    addTodo(formObject)

   }
//    console.log(item);
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="title">Title: </label>
                    <input name="title" id="title"  placeholder="Enter Title" required defaultValue={item? item.title: ""}/>
                </p>
                <p>
                    <label htmlFor="description">Description: </label>
                    <textarea name="description" id="description" placeholder="Enter Description" required defaultValue={item? item.description : ""} />
                </p>
                <p>
                    <input type="checkbox" id="completed" name="completed" defaultChecked = {item?.completed === "on"? true : false} />
                    <label htmlFor="completed">Mark this item as completed</label>
                </p>
                <button>{item ? "Save" : "Add New Item" }</button>
            </form>
        </div>
    )
}