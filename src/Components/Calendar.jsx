import React, { useState } from 'react'

import Header from './Header'

export default function Calendar(){
    const date = new Date();
    const [monthNumber, setMonthNumber] = useState(date.getMonth());
    const year = date.getFullYear();

    function goToNextMonth() {
        
        setMonthNumber(monthNumber + 1)
        // setMonthNumber(prev=>prev + 1)
    }

    return (
        <div>
            <Header monthNumber={monthNumber} year={year} onClickNextMonth={goToNextMonth}/>
        </div>
    )
}