import React, { useState } from "react";
import products from "./products";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    const product = products[0]; // Replace with the selected product
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
    };
    setCartItems([...cartItems, item]);
  };

  const product = products[0]; // Replace with the selected product

  return (
    <div>
      {/* Image carousel */}
      <div>
      <img src={product.images[selectedImageIndex]} alt={product.name} />
      <div>
        {product.thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={product.name}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
        </div>
      </div>

      {/* Product details */}
      <div>
      <h1>Sneaker Company</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price - product.discount}</p>
      <p>{product.discount}%</p>
      <p>${product.price}</p>
      <div>
        <button onClick={() => setQuantity(Math.max(quantity - 1, 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;