import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import trophy from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
export default function Quiz(){
    const[answerState, setAnswerState] = useState("");
    const[userAnswer, setUserAnswer] = useState([]);
    const currentQuestion = answerState === '' ? userAnswer.length : userAnswer.length - 1;
    
    const isQuizCompleted = currentQuestion === QUESTIONS.length;
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setAnswerState("Answered")
        console.log(userAnswer);
        setUserAnswer((prevAnswer) => {
           return [
            ...prevAnswer,
            selectedAnswer
        ]})
        setTimeout(()=>{
            if(selectedAnswer === QUESTIONS[currentQuestion].answers[0]){
                setAnswerState("Correct");
            }
            else{
                setAnswerState("Wrong");
            }

            setTimeout(() => {
                setAnswerState('')
            }, 2000);
        }, 1000)
    }, [currentQuestion]);

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
                    key={currentQuestion}
                    timeOut={10000} 
                    onTimeOut={handleSkipAnswer} 
                    />
                <h2>{QUESTIONS[currentQuestion].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map(answer =>{
                        let isSelected = userAnswer[userAnswer.length - 1] === answer;
                        let cssClass = '';
                        if(answerState === "Answered" && isSelected){
                            cssClass = "selected";
                        }
                        if((answerState === "Correct" || answerState === "Wrong") && isSelected){
                            cssClass = answerState;
                        }
                        return <li key={answer} className="answer">
                        <button onClick={()=>{handleSelectAnswer(answer)}} className={cssClass}>{answer}</button>
                    </li>
                    }
                        
                    )}
                </ul>
            </div>
        </div>
        
    )
}