import React, {useState} from "react";
import CartDropdown from "./CartDropdown";

function Navbar({ cartItems, setCartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const removeCartItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

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
          <button onClick={handleCartClick}>
            <img src="/icon-cart.svg" alt="Cart" />
            {cartItems.length > 0 && (
              <span className="cart-item-count">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </li>
      </ul>
      {isCartOpen && (
        <CartDropdown
          cartItems={cartItems}
          removeCartItem={removeCartItem}
          clearCart={clearCart}
        />
      )}
    </nav>
  );
}

export default Navbar;