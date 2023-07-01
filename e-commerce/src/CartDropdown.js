import React from "react";
import "./CartDropdown.css";

function CartDropdown({
  cartItems,
  isCartOpen,
  removeCartItem,
  clearCart,
}) {
  return (
    <div className={`CartDropdown ${isCartOpen ? "open" : ""}`}>
      <div className="CartDropdown-header">
        <h2>Cart</h2>
      </div>
      <div className="CartDropdown-body">
        {cartItems.length === 0 ? (
          <p className="empty-text">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((cartItem) => (
              <li className="Cart-item" key={cartItem.id}>
                <img src={cartItem.thumbnail} alt={cartItem.name} />
                <div>
                  <h3>{cartItem.name}</h3>
                  <p>${cartItem.price}.00 x {cartItem.quantity} <span>${cartItem.price*cartItem.quantity}.00</span></p>
                </div>
                <button onClick={() => removeCartItem(cartItem)}>
                  <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" use fill="#C3CAD9" fill-rule="nonzero"/></svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
        {/*cartItems.length > 0 && (
          <button  className="CartDropdown-clear" onClick={clearCart}>Clear cart</button>
        )*/}
        {cartItems.length > 0 && (
          <button className="CartDropdown-checkout">Checkout</button>
        )}
    </div>
  );
}

export default CartDropdown;