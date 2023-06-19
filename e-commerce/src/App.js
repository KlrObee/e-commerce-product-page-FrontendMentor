import React, { useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

function App() {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div className="App">
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <main>
        <Product addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;