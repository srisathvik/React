import React from "react"
import ReactDOM from "react-dom"
export default function Main(){
    return(
        <main className="content">
            <h1 className = "content--h1">FunFacts about React</h1>
            <ul className = "content--ul">
                <li>was first released in 2013</li>
                <li>was orginally created by Jordan walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>is maintained by Facebook</li>
                <li>powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}