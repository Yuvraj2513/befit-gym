// src/components/WhatsAppButton.js
import React from 'react';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '+917320059115'; // 🔁 Replace with your real WhatsApp number (with country code)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp whatsapp-icon"></i>
    </a>
  );
};

export default WhatsAppButton;
