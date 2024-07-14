import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.js"
import"./style.css"
// import Card from "./components/Card.js"

export default function Body(){
    return(
        <>
            <App />
            {/* <Card /> */}
        </>
    )
}

ReactDOM.render(<Body/>, document.querySelector("#root"))