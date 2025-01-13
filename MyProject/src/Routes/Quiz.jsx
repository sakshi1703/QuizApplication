import { useState } from "react"

export const Quiz = ()=>{

    const [currQuestion, setCurrQuestion] = useState(1)
    const totalQuestion = 5

    const nextQuestion = ()=>{
        if(currQuestion < totalQuestion){
            setCurrQuestion(currQuestion + 1)
        }
    }
    return(

        <>
        <h1>Quiz</h1>
        <h2>Question {currQuestion} of {totalQuestion}</h2>
            <div>
                <p>Question {currQuestion} goes here</p>
            </div>
            <button onClick={nextQuestion}>Next Question</button>
        </>
        
    )
}