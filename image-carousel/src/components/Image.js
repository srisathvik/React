import React, {useState} from "react"


export default function Image(){
    const [index, setIndex] = useState(0)
    const imageUrls=[
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    ];

    function handleNext(){
        index >= imageUrls.length -1 ? setIndex(0) : setIndex(index + 1)
    }
    function handlePrev(){
        index == 0 ? setIndex(imageUrls.length - 1) : setIndex(index - 1)
    }

    return(
    <div className="page">
        <button className="prev-button" onClick={handlePrev}>⬅</button>
        <img src={imageUrls[index]} />
        <button className="next-button" onClick={handleNext}>⮕</button>
        
    </div>
    )
}