import React from "react"
import ReactDOM from "react-dom"
import modi from "../images/modi.png"


export default function Info(){
    return(
        <div className="info">
            <img src={modi} className="info--img" width="300px"/>
            <h2>Narendra Modi</h2>
            <p>Prime Minister of India</p>
            <button width = "100px">Email</button>
        </div>
    )
}