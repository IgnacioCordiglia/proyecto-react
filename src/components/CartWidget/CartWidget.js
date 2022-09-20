import "./cartWidget.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

export default function CartWidget(props) {

    return(
        <button className="cartWidget">
            <FontAwesomeIcon icon= {faCartShopping} />
        </button>
    )
  }
