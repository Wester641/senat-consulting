import React from 'react';
import Gallery_1 from '../../images/phoneIcon/Phone.svg';
import './style.css';

const PhoneButton = () => {
  const handleClick = () => {
    window.open('https://t.me/Dettroid', '_blank');
  };

  return (
    <button 
      className="phone-button"
      onClick={handleClick}
      title="Написать нам"
      aria-label="Контакт"
    >
      <img 
        src={Gallery_1}
        alt="phone"
        className="phone-icon"
      />
    </button>
  );
};

export default PhoneButton;
