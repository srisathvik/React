import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.js"
import Card from "./components/card.js"
import Data from "./components/data.js"
// import swimmer from "/images/katie-zaferes.png"
import "./style.css"
function Body() {
    const DataElement = Data.map(item =>{
        return(
            <Card 
            key = {item.id}
            item = {item}
            />
        )
    })
    return(
        <>
            <App />
            <div className="card--items">
                {DataElement}
            </div>
        </>   
    )
     
}

ReactDOM.render(<Body />, document.querySelector("#root"));