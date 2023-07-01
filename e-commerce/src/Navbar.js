import React, {useState} from "react";
import CartDropdown from "./CartDropdown";
import './Navbar.css';

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
      <div className="nav-left">
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
      </ul>
      </div>
      <div className="nav-right">
      <ul>
        <li>
          <button onClick={handleCartClick}>
          <svg width="22" height="20" className="cart"
          xmlns="http://www.w3.org/2000/svg">
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" 
            fill="hsl(219, 9%, 45%)" 
            fill-rule="nonzero"/></svg>
            {cartItems.length > 0 && (
              <span className="cart-item-count">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </li>
        <li>
          <button className="avatar">
          <img src="/image-avatar.png" alt="profile"/>
          </button>
        </li>
      </ul>
      </div>
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