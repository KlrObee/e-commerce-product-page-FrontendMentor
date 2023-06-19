import React from "react";

function CartDropdown({
  cartItems,
  isCartOpen,
  closeCart,
  removeCartItem,
  clearCart,
}) {
  return (
    <div className={`CartDropdown ${isCartOpen ? "open" : ""}`}>
      <div className="CartDropdown-header">
        <h2>Cart</h2>
        <button onClick={closeCart}>Close</button>
      </div>
      <div className="CartDropdown-body">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                <img src={cartItem.thumbnail} alt={cartItem.name} />
                <div>
                  <h3>{cartItem.name}</h3>
                  <p>{cartItem.price} x {cartItem.quantity}</p>
                  <button onClick={() => removeCartItem(cartItem)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="CartDropdown-footer">
        {cartItems.length > 0 && (
          <button onClick={clearCart}>Clear cart</button>
        )}
      </div>
    </div>
  );
}

export default CartDropdown;