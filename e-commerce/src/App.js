import React, { useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import CartDropdown from "./CartDropdown";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeCartItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <Navbar
        cartItems={cartItems}
        openCart={openCart}
      />
      <Product
        addToCart={addToCart}
      />
      <CartDropdown
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        closeCart={closeCart}
        removeCartItem={removeCartItem}
        clearCart={clearCart}
      />
    </div>
  );
}

export default App;