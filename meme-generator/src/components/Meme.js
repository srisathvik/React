import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
// import memeData from "../memeData.js"

export default function Meme(){
    const [meme, setMeme] = useState(
        {
            topText:"",
            bottomText: "",
            randomImg:"http://i.imgflip.com/1bij.jpg"
        })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    useEffect(()=>{
        console.log("fetch ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(value => setAllMemeImages(value.data.memes))
    },[])
    
    // console.log(allMemeImages,allMemeImages.length)

    function handleEvent(e){
        console.log("I was clicked");
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        // console.log(allMemeImages[randomNumber].url);
        // console.log(allMemeImages);
            setMeme(prevMeme=>({
                    ...prevMeme,
                    randomImg: allMemeImages[randomNumber].url
                }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
        console.log(meme)
    }

    return(
        <main>
            <div className = "form">
                {/* <div className = "input--text"> */}
                    <input 
                        type="text"
                        placeholder="Top Text" 
                        onChange = {handleChange}
                        name = "topText"
                        value = {meme.topText}
                        className = "form--input"
                    />

                    <input 
                        type="text" 
                        placeholder="Bottom Text" 
                        onChange = {handleChange}
                        name = "bottomText"
                        value = {meme.bottomText}
                        className = "form--input"
                        />
                        <button 
                            className = "form--button"
                            type="submit" 
                            className="form--button" 
                            onClick={handleEvent}
                            >
                                Get a New meme image
                        </button>
                {/* </div> */}
            
                <div className="meme">
                    <>
                        <img src={meme.randomImg} className = "meme-img"/>
                        <h2 className="meme--text top">{meme.topText} </h2>
                        <h2 className="meme--text bottom">{meme.bottomText} </h2>
                    </>
                </div>
                </div>
        </main>
            
        )
}