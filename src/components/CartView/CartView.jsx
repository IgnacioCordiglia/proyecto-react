import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./cartview.css"

function CartView() {
  const { cart, removeItem } = useContext(cartContext);

  return (
    <FlexWrapper>
      {cart.length === 0 ? <h2 className="emptyCart">Tu carrito esta vacio</h2> :
        cart.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <h4>${item.price}</h4>
          <h4>{item.count}</h4>
          <h4>Precio Total: ${item.price * item.count}</h4>
          <button>X</button>
        </div>
      ))}
    </FlexWrapper>
  );
  
}
export default CartView;