import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Intrests from "./Intrests"
import Footer from "./Footer"

export default function App(){
    return(
        <div>
            <Info />
            <About />
            <Intrests />
            <Footer />
        </div>
    )
}