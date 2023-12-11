import React, { useState } from 'react';
import './Popup.css';

function Popup({ show, onClose, children }) {
  const [flipped, setFlipped] = useState(false);

  const handleButtonClick = () => {
    setFlipped(!flipped);
  };

  const handleClose = () => {
    setFlipped(false);
    onClose();
  };

  return (
    <div
      className={`popup ${show ? 'open' : ''} ${flipped ? 'flipped' : ''}`}
      onClick={handleClose}
    >
      <div className='popup-content' onClick={(e) => e.stopPropagation()}>
        <button className='close-button' onClick={handleClose}>
          &times;
        </button>
        <div className={`text-container ${flipped ? 'flipped' : ''}`}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onButtonClick: handleButtonClick, onClose, isFlipped: flipped })
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;