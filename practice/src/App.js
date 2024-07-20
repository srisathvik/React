import React from "react";
import { useState } from "react";
export default function App(){
    const[text, setText] = useState('');
    const[listItems, setListItems] = useState([]);

    function handleTextChange(e){
        setText(e.target.value);
        // setList(
        //     ...list,
        //     e.target.value
        // )
    }

    function handleSubmit(e){
        e.preventDefault();
        let data = e.target[0].value;
        setListItems([
            ...listItems,
            {id: listItems.length, data: data}
        ])
        setText("");
    }
    function handlleDelete(itemIndex){
        let newList = listItems.filter(item => item.id !== itemIndex);
        setListItems(newList);
    }
    return (
        <>          
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={handleTextChange} />
            </form>
            <p>{text}</p>
            <p>{text.length > 0 && text.length}</p>
            <ul>
                {console.log( typeof listItems, listItems)}
                {listItems.map((item) => (
                    <div>
                        <li key={item.id}>{item.data}</li>
                        {console.log(item.id)}
                        <button onClick={() => {
                            // setListItems(listItems.filter(i =>
                            //     i.id !== item.id
                            // ))
                            handlleDelete(item.id)
                        }}>delete</button>
                    </div>
                ))}
            </ul>
        </>
      );
}