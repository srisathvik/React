import React from "react"
import ReactDOM from "react-dom"
// import Logo from "../../public/images/Airbnb-logo.jpg"
// import heroLogo from "../../public/images/Airbnb.jpg"
export default function App(){
    return(
        <div className="static">
            <div className="nav-bar">
                <img src="/images/airbnb-logo.png" className="navbar--img"/>
            </div>
            <img src="/images/photo-grid.png" className="heroLogo" height="400px"/> 
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind hosts—all
                without leaving home.
            </p>    
        </div>
    )
}