import React from "react"
import reactLogo from "../src/images/react_logo.png"
export default function Header(){
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo" width="50px"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}