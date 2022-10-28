import "./card.css";
import {Link} from "react-router-dom";

export default function Card(props) {

    return(
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt=""></img>
      </div>
      <div className="card-detail">
        <h2 className="title">{props.title}</h2>
        <p className="details">{props.detail}</p>
        <h4 className="price">$ {props.price}</h4>
        <Link to={`/item/${props.id}`}><button className="seeDetails">Ver detalles</button></Link>
      </div>
    </div>
    )
  }

