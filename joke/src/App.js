import { useState } from "react"
import ReactDOM from "react-dom"
import jokeData from "./jokesData"
import Joke from "./Joke.js"
import Star from "./Star.js"
import boxes from "./boxes.js"
import Box from "./box.js"
import Square from "./Square.js"
import Form from "./form.js"
import StarWars from "./starWars.js"
// export default function App(){/
//     const[value, setValue] = useState('')
//     const handleChange = e => {
//         setValue(e.target.value)
//     }
//     return(
//         <>
//             <input type="text" onChange={handleChange} value={value}/>
//             <p>{value}</p>
//         </>
//     )
// }
// export default function App(props){

 
//     return(
//         <>
//             {/* {squareElements} */}
//             {/* <Square darkMode={props.darkMode} /> */}
//             <Joke 
//                 setup="I got my daughter a fridge for her birthday"
//                 punchline="I cant wait to see her face lit up when she opens it"
//                 upvote = {10}/>
//             {/* <Joke
//                 setup="How did hacker escape the police?"
//                 punchline="He just ransomeware!" 
//                 upvote = {10}/>
//             <Joke 
//                 setup="This is setup3"
//                 punchline="This is punchline 3"
//                 upvote = {10} />
//             <Joke 
//                 setup="This is setup4"
//                 punchline="This is punch line 4"
//                 upvote = {10} /> */}
//         </>
//     )

    
// }

export default function App(){
    return (
        < StarWars />
    )
}




// export default function App(){
//     const [number, setCount] = React.useState({
//         count: 0,
//         isFavorite: false 
//     });

//     function add(){
//         setCount(prevData=>({
//             ...prevData,
//             count: prevData.count+1
//         }));
//         // <Joke count={number} />
//     }
//     function subtract(){
//         setCount(prevData=>({
//             ...prevData,
//             count: prevData.count-1
//         }));
//         // <Joke count={number} />
//     }

//     function toggleFavorite(){
//         setCount(prevData=>({
//             ...prevData,
//             isFavorite: !prevData.isFavorite
//         }));
//     }

//     return (
//         <>
//             {/* <Joke 
//                 setup="I got my daughter a fridge for her birthday"
//                 punchline="I cant wait to see her face lit up when she opens it"
//                 upvote = {10}/>
//             <Joke
//                 setup="How did hacker escape the police?"
//                 punchline="He just ransomeware!" 
//                 upvote = {10}/>
//             <Joke 
//                 setup="This is setup3"
//                 punchline="This is punchline 3"
//                 upvote = {10} />
//             <Joke 
//                 setup="This is setup4"
//                 punchline="This is punch line 4"
//                 upvote = {10} />
//             {console.log("App")} */}
            
//             <button onClick={add}>+</button>
//             <Joke count={number.count} />
//             {/* <h1>{number}</h1> */}
//             <button onClick={subtract}>-</button>
//             <Star isFilled = {number.isFavorite} onClick = {toggleFavorite}/>
            
//         </>
//     )
// }