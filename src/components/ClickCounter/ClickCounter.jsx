import React, {useState} from 'react';
import './clickcounter.css';

export default function ClickCount() {
    const [clicks,setClicks] = useState(0);

    function handleClickPlus () {
        setClicks(clicks + 1);
    } 

    function handleClickMinus () {
        if(clicks>0){
            setClicks(clicks - 1);
        }
    } 

    return (
        <div className="clickCounterContainer">
            <button className="clickButton" onClick={handleClickPlus}>+</button>
            <strong>{clicks}</strong>
            <button className="clickButton" onClick={handleClickMinus}>-</button>
        </div>
    )
}