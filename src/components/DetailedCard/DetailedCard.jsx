import "./detailedcard.css";
import ClickCounter from "../ClickCounter/ClickCounter";
import {Link} from "react-router-dom";

export default function Card(props) {

    return(
    <div className="DetailedCard">
      <div className="DCimg">
        <img src={props.img} alt="producto"></img>
      </div>
      <div className="DCinfo">
        <h2 className="DCtitle">{props.title}</h2>
        <p className="DCdetails">{props.detail}</p>
        <h4 className="DCprice">$ {props.price}</h4>
        <ClickCounter />
      </div>
      
    </div>
    )
  }
