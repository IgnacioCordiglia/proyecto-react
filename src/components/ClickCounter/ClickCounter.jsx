import React, {useState} from 'react';
import './clickcounter.css';

export default function ClickCount() {
    const [clicks,setClicks] = useState(0);
    const [lastClick,setLastClick] = useState();

    function handleClickPlus () {
        setClicks(clicks + 1);
        let timeClick = new Date().toLocaleTimeString();
        setLastClick(timeClick);
    } 

    function handleClickMinus () {
        if(clicks>0){
            setClicks(clicks - 1);
            let timeClick = new Date().toLocaleTimeString();
            setLastClick(timeClick);
        }
    } 

    return (
        <div>
            <button class="clickButton" onClick={handleClickPlus}>+</button>
            <button class="clickButton" onClick={handleClickMinus}>-</button>
            <strong>{clicks}</strong>
            <h4>{lastClick}</h4>
        </div>
    )
}