import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import trophy from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
export default function Quiz(){
    const[userAnswer, setUserAnswer] = useState([]);
    const currentQuestion = userAnswer.length;
    
    const isQuizCompleted = currentQuestion === QUESTIONS.length;
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        console.log(userAnswer);
        setUserAnswer((prevAnswer) => {
           return [
            ...prevAnswer,
            selectedAnswer
        ]})
    }, []);

    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null), [handleSelectAnswer]);

    if(isQuizCompleted){
        return(
            <div id="summary">
                <h2>Quiz completed</h2>
                <img src={trophy} alt="Trophy Icon"/>
            </div>
        )
    }

    const shuffledAnswers = [...QUESTIONS[currentQuestion].answers]
    shuffledAnswers.sort(()=>Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer 
                    timeOut={10000} 
                    onTimeOut={handleSkipAnswer} 
                    />
                <h2>{QUESTIONS[currentQuestion].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map(answer =>(
                        <li key={answer} className="answer">
                            <button onClick={()=>{handleSelectAnswer(answer)}} >{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}