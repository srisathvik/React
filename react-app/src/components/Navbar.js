import React, {useState} from "react"
import ReactDOM from "react-dom"
import reactLogo from "../images/react_logo.png"
export default function Navbar(){
    const[mode, setMode] = useState(true)
    function handleClick(e){
        console.log(mode)
        e.target.innerText = (e.target.innerText === "Dark Mode" ? "Light Mode" : "Dark Mode"); 
        setMode(!mode)
        
    }
    console.log(mode)
    return(
        <nav className="nav-bar">
            <div className="nav--div">
                <img src={reactLogo} width="60px" className="nav--div--img"/>
                <h3 className="nav--div--h3">ReactFacts</h3>
            </div>
            <h4 className ="nav--h4">React Course - Project 1</h4>
            <button className="mode" onClick={handleClick}>Light Mode</button>
        </nav>
    )
}