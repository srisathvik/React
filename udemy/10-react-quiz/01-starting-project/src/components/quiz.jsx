import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";
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
        ]});
        
    }, []);

    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null), [handleSelectAnswer]);

    if(isQuizCompleted){
        return(
            <Summary userAnswer={userAnswer}/>
        )
    }
    
    

    return (
        <div id="quiz">
            <Question 
                key={currentQuestion}
                questionIndex={currentQuestion}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
        
    )
}