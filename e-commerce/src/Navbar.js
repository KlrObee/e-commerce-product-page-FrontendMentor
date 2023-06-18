import React from "react";
import { a } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <img src="/logo.svg" alt="Logo" />
      <ul>
        <li>
          <a href="">Collections</a>
        </li>
        <li>
          <a href="">Men</a>
        </li>
        <li>
          <a href="">Women</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div>
        <img src="/icon-cart.svg" alt="Cart" />
        <div>
          {/* Cart dropdown */}
          {/*cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          )*/}
        </div>
      </div>
      <img src="/image-avatar.png" alt="Profile" />
    </nav>
  );
}

export default Navbar;