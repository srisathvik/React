import React from "react"
import ReactDOM from "react-dom"
import Nav from "./Nav.js"
import Card from "./Card.js"
import Data from "../data.js"

const dataElement = Data.map(item=>{
    return(
        <Card 
            key = {item.id}
            item = {item}
        />
    )
})
export default function App(){
return (
    <>
        <Nav />
        {dataElement}
    </>
)
}