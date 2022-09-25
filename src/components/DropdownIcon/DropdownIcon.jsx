import './dropdownicon.css'
import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function DropdownIcon (props) {
    const [open, setOpen] = useState(false);

    return (<li className="nav-item">
                <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                    {props.icon+" "}
                    <FontAwesomeIcon icon= {faChevronDown} className="dropdown-arrow"/>
                </a>
                {open && props.children}
            </li>
    );
}

export default DropdownIcon;