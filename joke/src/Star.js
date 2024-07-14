import React from "react"
import ReactDOM from "react-dom"

export default function Star(props){
    console.log(props);
    // function toggleFavorite(){
    //     props.isFilled  = !props.isFilled;
    // }
    const starIcon = props.isFilled ? "filled-star.jpg" : "empty-star.png"

    
    return(
        <>
    
            <img src= {`./images/${starIcon}`} 
            onClick  = {props.onClick} />
        
        
        </>
    )
}