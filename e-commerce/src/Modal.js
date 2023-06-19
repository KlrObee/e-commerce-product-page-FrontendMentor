import React, { useState } from "react";

function Modal({ images, thumbnails, onClose, selectedImageIndex }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(selectedImageIndex);

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handleBack = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>
          <img src={images[currentImageIndex]} alt="" />
          <div>
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt=""
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={handleBack}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;