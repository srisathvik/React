import React from "react"
import {useState} from "react"
import ReactDOM from "react-dom"

export default function Joke(props){
    // const [isShown, setIsShown] = useState(false)
    // function toggle(){
    //     setIsShown(!isShown)
    // }
    // return (
    //     <>
    //         {props.setup && <h3>{props.setup}</h3>}
    //         {isShown && <p>{props.punchline}</p>}
    //         <button onClick={toggle}>{isShown? "Hide" : "Show"} punchline</button>
    //     </>
    // )

    const [messages, setMessages] = useState([0, 1])
    return(
        <div>
            {
                messages.length === 0 ? 
                <h1> You are all caught up! </h1> :
                <h1> You have {messages.length} unread {messages.length === 1? "message" : "messages"}</h1>
            }
        </div>
    )
}