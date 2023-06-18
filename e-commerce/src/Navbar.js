import React from "react";

function Navbar() {
  return (
    <nav>
      <img src="/logo.svg" alt="Logo" />
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
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