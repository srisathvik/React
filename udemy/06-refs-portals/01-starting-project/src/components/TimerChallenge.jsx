import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) { 
    let timer = useRef();
    const dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerStarted = timeRemaining > 0 && timeRemaining !== targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }
    function handleStart(){
        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10);
        }, 10);
    }
    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }
    return(
        <>
            <ResultModal ref={dialog} targetTime={targetTime} onReset={handleReset} remainingTime={timeRemaining} result="lost"/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">{targetTime} second{targetTime > 1 ? "s":""}</p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "Time is running..." : "Timer Inactive"}   
                </p>
            </section>
        </>
    );
}