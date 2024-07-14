import { useState } from "react"
import ReactDOM from "react-dom"
import jokeData from "./jokesData"
import Joke from "./Joke.js"
import Star from "./Star.js"
import boxes from "./boxes.js"
import Box from "./box.js"


export default function Square(props){

    const[squares, setSquares] = useState(boxes)
    const styles = {
        backgroundColor: props.darkMode? "#222222" : "#cccccc"
    }

    function toggle(id){
        setSquares(prevSquares=>{
            return prevSquares.map((square)=>{
                return (square.id === id ? {...square, on: !square.on} : square)
            })
        })
    }
    
    const squareElements = squares.map(square =>(
        <Box 
            on={square.on} 
            key={square.id} 
            id={square.id} 
            toggle={()=> toggle(square.id)}
        /> 
    ))
 
    return(
        <>
            {squareElements}
        </>
    )

    
}
