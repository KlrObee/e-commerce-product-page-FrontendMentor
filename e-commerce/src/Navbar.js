import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <img src="/logo.svg" alt="Logo" />
      <ul>
        <li>
          <Link to="/Collections">Collections</Link>
        </li>
        <li>
          <Link to="/Men">Men</Link>
        </li>
        <li>
          <Link to="/Women">Women</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
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