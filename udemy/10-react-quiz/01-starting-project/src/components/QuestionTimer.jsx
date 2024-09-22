import { useState, useEffect } from "react";
export default function QuestionTimer({timeOut, onTimeOut}){
    const[remainingTime, setRemainingTime] = useState(timeOut);
    useEffect(()=>{
    setTimeout(onTimeOut, timeOut);
    }, [timeOut, onTimeOut]);
    useEffect(()=>{
        setInterval(() => {setRemainingTime(prevTime => prevTime - 100)}, 100);
    },[])
    
    return <progress id="question-time" max={timeOut} value={remainingTime} />
}