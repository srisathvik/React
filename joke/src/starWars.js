import React, {useEffect, useState} from "react"

export default function StarWars(){
    const [count, setCount] = useState(1)
    const [starWars, setStarWars] = useState({})

    useEffect(()=>{
        console.log("effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWars(data))
    }, [count])

    function handleClick(){
        setCount(count + 1)
    }
    return(
        <div>
            <h2>The count is {count} </h2>
            <button onClick = {handleClick}>Get next character</button>
            <pre>{JSON.stringify(starWars, null, 2)}</pre>
        </div>
    )
}