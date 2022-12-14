import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    let newCart = [...cart];
    let newItem = { ...item, count };
    newCart.push(newItem);
    setCart(newCart);
    console.log(newItem.count)
  }

  function clearCart() {
    setCart([]);
  }

  function removeItem(idToRemove) {
    let newCart = cart.filter((itemInCart) => (itemInCart.id !== idToRemove));
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
    let total = 0;
    cart.forEach((itemInCart) => {
      total += itemInCart.count*itemInCart.price;
    });
    return total;
  }

  /* function isInCart()  -> Array.some */

  return (
    <>
      <cartContext.Provider
        value={{cart, addToCart, getTotalPrice, getTotalItemCount, removeItem, clearCart}}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };