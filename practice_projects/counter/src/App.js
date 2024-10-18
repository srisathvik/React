import { useState } from "react"

export default function App() {
    const[count, setCount] = useState(1);
    const[value, setValue] = useState(0);

    function handleReset() {
        setValue(0);
        setCount(1);
    }

    function handleIncreament() {
        setValue(prevValue => prevValue + count);
    }
    function handleDecreament() {
        setValue(prevValue => prevValue - count);
    }

    function handleCount(e) {
        setCount(parseInt(e.target.value));
    }

    return(
        <div>
            <h2>{value}</h2>
            <button onClick={handleIncreament}>+</button>
            <button onClick={handleDecreament}>-</button>
            <p>Increment or Decrement by: </p>
            <input type="number" value={count} onChange={handleCount}></input>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}