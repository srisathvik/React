import css from "styled-jsx/css";
import trophy from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js"
export default function Summary({userAnswer}){

    const skippedAnswers = userAnswer.filter(answer => answer === null).length;
    const correctAnswers = userAnswer.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;

    const skippedAnswersShare = Math.round((skippedAnswers/userAnswer.length) * 100);
    const correctAnswersShare = Math.round((correctAnswers/userAnswer.length) * 100);
    const wrongAnswerShare = 100 - (skippedAnswersShare + correctAnswersShare);
    console.log(skippedAnswers, correctAnswers, skippedAnswersShare, correctAnswers, wrongAnswerShare);
    return(
        <div id="summary">
            <img src={trophy} alt="Trophy Icon"/>
            <h2>Quiz completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersShare}%</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">Answered Correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswerShare}%</span>
                    <span className="text">Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                {QUESTIONS.map((question, index) => {
                    let cssClass = "user-answer";
                    if(userAnswer[index] === null){
                        cssClass += " skipped"
                    }
                    else if(userAnswer[index] === question.answers[0]){
                        cssClass += " correct"
                    }
                    else{
                        cssClass += " wrong"
                    }

                    return(
                        <li key={question.text}>
                            <h3>{index + 1}</h3>
                            <p className="question">{question.text}</p>
                            <p className={cssClass}>{userAnswer[index]}</p>
                        </li>
                        
                    )
                })}
                
            </ol>
        </div>
    )
}