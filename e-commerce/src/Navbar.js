import React from "react";

function Navbar({ cartItems, openCart }) {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <img src="/logo.svg" alt="Logo" />
      <ul>
        <li>
          <button>Collections</button>
        </li>
        <li>
          <button>Men</button>
        </li>
        <li>
          <button>Women</button>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Contact</button>
        </li>
        <li>
          <button onClick={openCart}>
            <img src="/icon-cart.svg" alt="Cart" />
            {totalQuantity > 0 && (
              <span className="cart-item-count">{totalQuantity}</span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;