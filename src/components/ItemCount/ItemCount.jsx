import React, {useState} from 'react';
import './itemcount.css';
import FlexWrapper from '../FlexWrapper/FlexWrapper';

export default function ItemCount({stock,initial,text,onAddToCart}) {
    const [clicks,setClicks] = useState(0);

    function handleClickPlus () {
        if(clicks<stock) setClicks(clicks + 1);
    } 

    function handleClickMinus () {
        if(clicks>0){
            setClicks(clicks - 1);
        }
    }

    return (
        <FlexWrapper>
            <div className="clickCounterContainer">
                <button className="clickButton" onClick={handleClickPlus}>+</button>
                <strong className="cantItems">{clicks}</strong>
                <button className="clickButton" onClick={handleClickMinus}>-</button>
            </div>

            <div className="itemcount_btns">
                <button className="addCartButton" onClick={() => {onAddToCart(clicks)}}>Agregar al carrito</button>
            </div>
        </FlexWrapper>
    )
}