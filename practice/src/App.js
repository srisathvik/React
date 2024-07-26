// import React from "react";
// import { useState } from "react";
// export default function App(){
//     const[text, setText] = useState('');
//     const[listItems, setListItems] = useState([]);

//     function handleTextChange(e){
//         setText(e.target.value);
//         // setList(
//         //     ...list,
//         //     e.target.value
//         // )
//     }

//     function handleSubmit(e){
//         e.preventDefault();
//         let data = e.target[0].value;
//         setListItems([
//             ...listItems,
//             {id: listItems.length, data: data}
//         ])
//         setText("");
//     }
//     function handlleDelete(itemIndex){
//         let newList = listItems.filter(item => item.id !== itemIndex);
//         setListItems(newList);
//     }
//     return (
//         <>          
//             <form onSubmit={handleSubmit}>
//                 <input value={text} onChange={handleTextChange} />
//             </form>
//             <p>{text}</p>
//             <p>{text.length > 0 && text.length}</p>
//             <ul>
//                 {console.log( typeof listItems, listItems)}
//                 {listItems.map((item) => (
//                     <div>
//                         <li key={item.id}>{item.data}</li>
//                         {console.log(item.id)}
//                         <button onClick={() => {
//                             // setListItems(listItems.filter(i =>
//                             //     i.id !== item.id
//                             // ))
//                             handlleDelete(item.id)
//                         }}>delete</button>
//                     </div>
//                 ))}
//             </ul>
//         </>
//       );
// // }
// import React, {useState, useEffect, useRef} from 'react';

// export default function App() {
//   const [name, setName] = useState(() => {
//     debugger
//     return ''
//   })
//   const previousName = useRef('')
//   debugger
//   console.log(useState())
//   console.log("component rendered")
//   useEffect(() => {
//     // console.log("use effect rendered ", name);
//     console.log("use effect rendered ", Date.now());
//     // previousName.current = name
//   }, [name])

//   return (
//     <>
//       <p>{console.log(Date.now())}</p>
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <div>my name is {name} used to be {previousName.current} </div>
//     </>
//   )
// }

// import { useAmp } from 'next/amp';





// import React, {useState, useEffect} from 'react';

// export default function App(){
//   const[resourceType, setResourceType] = useState('posts');
//   console.log("component rendered");
//   useEffect(()=>{
//     console.log("resource type changed");
//   }, [resourceType])

//   return(
//     <>
//       <div>
//         <button onClick={()=>{setResourceType('posts')}}>Posts</button>
//         <button onClick={()=>{setResourceType('users')}}>Users</button>
//         <button onClick={()=>{setResourceType('comments')}}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//     </>
//   )
// }



import React,{useState, useRef} from "react";

export default function App(){
  const[name, setName] = useState('');
  const inputRef = useRef('');
  console.log(inputRef);
  function handleClick(){
    console.log(inputRef);
    inputRef.current.focus();
  }
  return(
    <>
      <input ref={inputRef} value={name} onChange={(e)=>{setName(e.target.value)}} />
      <div>my name is {name}</div>
      <button onClick={handleClick}>focus</button>
    </>
  )
}
// Log to console
// console.log('Hello console')