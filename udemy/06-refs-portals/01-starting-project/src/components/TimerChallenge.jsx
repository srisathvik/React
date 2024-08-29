import { useRef, useState } from "react";

export default function TimerChallenge({title, targetTime}) {
    const[timerStarted, setTimerStarted] = useState(false);
    const[timerExpired, setTimerExpired] = useState(false);
    let timer = useRef();
    function handleStart(){
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            setTimerStarted(false);
        }, targetTime * 1000);
    }
    function handleStop(){
        clearTimeout(timer.current);
        setTimerStarted(false);
    }
    return(
        <section className="challenge">
            <h2>{title}</h2>
            <p>{timerExpired && <p>You lost!</p>}</p>
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
    );
}