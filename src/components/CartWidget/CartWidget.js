import "./cartWidget.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {cartContext} from "../../context/cartContext";
import {useContext} from "react";

export default function CartWidget(props) {
    const {getTotalItemCount} = useContext(cartContext);

    return(
        <button className="cartWidget">
            <FontAwesomeIcon icon= {faCartShopping} />
            <span>{getTotalItemCount()}</span>
        </button>
    )
  }
