import React from "react"
import  ReactDOM  from "react-dom"
import App from "./App"
function Temporary(){
    return(
        <div>
            <App />
        </div>
        
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));