import "./card.css";

export default function Card(props) {

    return(
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt=""></img>
      </div>
      <div className="card-detail">
        <h2 class="title">{props.title}</h2>
        <p>{props.detail}</p>
        <h4 class="price">$ {props.price}</h4>
        <button>Ver detalles</button>
      </div>
      
    </div>
    )
  }

