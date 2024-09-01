import { useRef } from "react"

export default function Input({handleItem}){
    let title = useRef("");
    function handleChange(value){
        title.current += value
    }

    return(
        <>
            <input value={title.current} onChange={(e) =>{handleChange(e.target.value)}}/>
            <button onClick={()=>{
                console.log(title);
                handleItem(title.current);
                handleChange("");
                }}>Add Item</button>
        </>
    )
}