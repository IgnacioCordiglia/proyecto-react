import "./cartWidget.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {cartContext} from "../../context/cartContext";
import {useContext} from "react";
import { Link } from "react-router-dom";

export default function CartWidget(props) {
    const {getTotalItemCount} = useContext(cartContext);

    return(
        <Link to="/cart">
            <button className="cartWidget">
                <FontAwesomeIcon icon= {faCartShopping} />
                <span>{getTotalItemCount()}</span>
            </button>
        </Link>
    )
  }
