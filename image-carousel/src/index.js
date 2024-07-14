import React from "react"
import ReactDom from "react-dom"
import App from "./App.js"

export default function Index(){
    return(
        <App />
    )
}

ReactDom.render(<App />, document.querySelector("#root"))