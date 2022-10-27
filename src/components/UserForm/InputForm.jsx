import React from "react";
import './userform.css';


export default function InputForm(props) {
  return (
    <div className="labelInputForm">
        <div className="labelForm">
            <label >{props.title}</label>
        </div>
        <input
            value={props.value}
            required={props.required}
            name={props.name}
            type="text"
            onChange={props.onChange}
        />
    </div>
  );
}