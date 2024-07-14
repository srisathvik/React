import React from "react"
import ReactDOM from "react-dom"
import twitter from "../images/twitter_alt.jpg"
import insta from "../images/insta.jpg"
import facebook from "../images/facebook.png"

export default function Footer(){
    return(
        <div className="social_media">
            <img src={twitter} width = "80px"/>
            <img src={insta} width = "80px"/>
            <img src={facebook} width = "80px"/>
        </div>
    )
}