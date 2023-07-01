import React, { useState } from "react";
import "./Modal.css";

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
    <div className="modal" >
      <div className="modal-content">
      <svg className="close" onClick={onClose} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
      <div className="carousel">
        <img className="current-image" src={images[currentImageIndex]} alt="" />
        <div className="modal-thumbnail">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt=""
              className={`modal-thumbnail-image ${index === currentImageIndex ? 'selected' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <div className="modal-buttons">
        <svg className="button-previous" onClick={handleBack} width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill-rule="evenodd"/></svg>
        <svg className="button-next" onClick={handleNext} width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill-rule="evenodd"/></svg>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Modal;