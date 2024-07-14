import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import "./style.css"

export default function Body(){
    return(
        <App />
    )
}

ReactDOM.render(<Body />, document.querySelector("#root"));