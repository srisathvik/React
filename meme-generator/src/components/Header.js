import React from "react"
import ReactDOM from "react-dom"

export default function Header(){
    return(
        <header className="header">
            <img className="header--img" src="/images/troll-face.png" width="50px"/>
            <h2 className="header--title">Meme Generator </h2>
            <h4 className="header--project">React Course- Project 3</h4>
        </header>

    )
}