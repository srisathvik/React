import { useState, useEffect } from "react";
// const TIMER = 3000;
export default function ProgressBar({TIMER}){
    const [remainingTime, setRemainingTime] = useState(TIMER);
  useEffect(()=>{
    const interval = setInterval(()=>{
      console.log("Timer started");
      setRemainingTime(remainingTime => remainingTime-10);
    }, 10);
    return() =>{
      clearInterval(interval);
    }
  },[]);
  return <progress value={remainingTime} max={TIMER} />
}