import React from "react"

function Joke(props) {
    /*if(props.question)
    {
        return (
            <div>
                <p>question: {props.question}</p>
                <p>answer: {props.answer}</p>  
                <hr></hr>  
            </div>
        );
    }
    else
    {
        return (
            <div>
                <p>joke: {props.answer}</p> 
                <hr></hr>   
            </div>
        );
    }*/
    return (
        <div>
            <p style={{ display: !props.question && "none", color: props.question ? "red" : "grey"}}>question: {props.question}</p>
            <p style={{color: !props.question && "yellow"}}>answer: {props.answer}</p>  
            <hr></hr>  
        </div>
    );  
}

export default Joke