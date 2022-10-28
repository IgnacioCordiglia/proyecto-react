import React, { useState } from "react";
import { createBuyOrder } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { Navigate } from "react-router-dom";
import InputForm from "./InputForm";
import {cartContext} from "../../context/cartContext";
import {useContext} from "react";
import './userform.css';


export default function UserForm() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(cartContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

    function onSubmit(evt) {
        evt.preventDefault();

        const orderData = {
            buyerData: userData,
            cart: cart,
            total: getTotalPrice(),
            date: new Date()
        };

        createBuyOrder(orderData). then ( respuesta => {
          Toastify({
            text: "¡Gracias, tu compra se ha completado con exito!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            
            newWindow: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "green",
            }// Callback after click
          }).showToast();
          clearCart();
        })
      }

  return (
    <form className="divForm" onSubmit={onSubmit}>
      <InputForm
        value={userData.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <button className="removeAllButton" onClick={() => {onSubmit()}}>Finalizar compra</button>
    </form>
  )}
