import React from 'react';
import Gallery_1 from '../../images/phoneIcon/Phone.svg';
import './style.css';

const PhoneButton = () => {
  const handleClick = () => {
    const phoneNumber = '996707967711';
    const message = 'Здравствуйте я бы хотел записаться на консультацию!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      className="phone-button"
      onClick={handleClick}
      title="Написать в WhatsApp"
      aria-label="Контакт в WhatsApp"
    >
      <img 
        src={Gallery_1}
        alt="whatsapp"
        className="phone-icon"
      />
    </button>
  );
};

export default PhoneButton;