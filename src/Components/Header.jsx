import React from "react"

export default function Header(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return (
        <div>
            <h1>
            
                {months[props.monthNumber]}
                {props.year}
            </h1>
            <button onClick={props.onClickNextMonth}>Next Month</button>
        </div>
    )
}