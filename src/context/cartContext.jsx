import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    let newCart = [...cart];
    let newItem = { ...item, count };
    newCart.push(newItem);
    setCart(newCart);
    console.log("recibimos",item,count)
  }

  /* function clearCart() */
  function clearCart() {
    setCart([]);
  }

  function removeItem(idToRemove) {
    let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
    setCart(newCart);
  }


  function getTotalItemCount() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total += itemInCart.count;
    });
    return total;
  }

  function getTotalPrice() {
    let devolver = 0;
    cart.forEach(
        item => {
            devolver+=(item.price*item.count);
        }
    )
        return devolver;
  }

  /* function isInCart()  -> Array.some */

  return (
    <>
      <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, removeItem }}>
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };