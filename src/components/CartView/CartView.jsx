import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import { createBuyOrder } from "../services/firebase";
import "./cartview.css"

function CartView() {
  const { cart, removeItem, getTotalPrice, clearCart } = useContext(cartContext);

  function handleCheckout() {
    const buyerData = {
      name: "John",
      email:"ignaciocordiglia@gmail.com",
      phone:"+54 2932 000000"
    };
  

    const orderData = {
    buyerData: buyerData,
    cart: cart,
    total: getTotalPrice(),
    date: new Date()
    }
    }

  return (
    <FlexWrapper>
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"></link>
      
      {cart.length === 0 ? <h2 className="emptyCart">Tu carrito esta vacio</h2> :
        
        cart.map((item) => (
        <div className="divCartItem">
          <img className="cartItemImg" src={item.img} />
          <div className="cartItemInfo">
            <h2>{item.title}</h2>
            <h3 className="cartItemPrice">${item.price}</h3>
            <h4>Cantidad: {item.count}</h4>
            <h4>Precio Total: ${item.price * item.count}</h4>
            <button className="removeItemButton" onClick={() => {removeItem(item.id)}}>X</button>
          </div>
        </div>
      ))}
      
      {cart.length === 0 ? <></>: 
        <><h1 className="TotalPrice">Precio Total: ${getTotalPrice()}</h1>
        <div>
        <button className="removeAllButton" onClick={() => {clearCart()}}>Limpiar carrito</button>
        <button className="removeAllButton" onClick={() => {handleCheckout()}}>Finalizar compra</button>
        </div>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js" />
        </>}
      </FlexWrapper>
      
  );
  
  
  
}
export default CartView;