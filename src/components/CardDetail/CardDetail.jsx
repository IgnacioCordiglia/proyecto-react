import "./carddetail.css";
import React, {useState} from 'react';
import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";
import {cartContext} from "../../context/cartContext";
import {useContext} from "react";

export default function Card(props) {
  const [count, setCount] = useState(0);
  const {addToCart} = useContext(cartContext);

  function handleAddToCart(count) {
      addToCart(props, count);
      setCount(count);
  }

  if (props.title)
    return(
    <div className="DetailedCard">
      <div className="DCimg">
        <img src={props.img} alt="producto"></img>
      </div>
      <div className="DCinfo">
        <h2 className="DCtitle">{props.title}</h2>
        <p className="DCdetails">{props.detail}</p>
        <h4 className="DCprice">$ {props.price}</h4>
        <ItemCount onAddToCart={handleAddToCart} stock={props.stock}/>
      </div>
      
    </div>
    )

  return <Loader />;
}
