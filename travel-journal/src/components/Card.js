import React from "react"
import ReactDOM from "react-dom"

export default function Card(props){
    console.log(props)
return (
    <div className="container">
        <div className = "card">
            <img src={props.item.imageUrl} className="image"/>
            <div className="card__info">
                <div className="card__info--location">
                    <img src = "/images/placeholder.png" width="10px" />
                    <p className="country">{props.item.location}</p>
                    <a href = {props.item.googleMapsUrl}>view on google maps</a>
                </div>
                <h3 className="title">{props.item.title}</h3>
                <h4 className="date">{props.item.startDate}-{props.item.endDate}</h4>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    </div>
    )}