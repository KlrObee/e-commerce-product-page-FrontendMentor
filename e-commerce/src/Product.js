import React, { useState } from "react";
import products from "./products";
import Modal from "./Modal";

function Product({ addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = products[0]; // Replace with the selected product
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      thumbnail: product.thumbnails[selectedImageIndex],
      price: product.price * product.discount / 100,
      quantity: quantity,
    });
  };

  return (
    <div>
      {/* Image carousel */}
      <div>
        <img
          src={product.images[selectedImageIndex]}
          alt={product.name}
          onClick={() => setIsModalOpen(true)}
        />
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
        <h1>{product.company} </h1>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price * product.discount / 100}</p>
        <p>{product.discount}%</p>
        <p>${product.price}</p>
        <div>
          <button onClick={() => setQuantity(Math.max(quantity - 1, 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button onClick={handleAddToCart}>
          <img src="/icon-cart.svg" alt="Cart" />Add to cart
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          images={product.images}
          thumbnails={product.thumbnails}
          onClose={() => setIsModalOpen(false)}
          selectedImageIndex={selectedImageIndex}
        />
      )}
    </div>
  );
}

export default Product;