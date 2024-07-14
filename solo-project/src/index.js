import React from "react"
import ReactDOM from "react-dom"
import App from  "./components/App"
import "./components/style.css"
function Body() {
    return(
        <App />
    )
    
}
ReactDOM.render(<Body />, document.querySelector("#root"));