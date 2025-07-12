// src/components/CalorieButton.js
import React, { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';
import CalorieModal from './CalorieModal';
import { useAuth } from '../context/AuthContext'; // ✅ Use Auth Context

const CalorieButton = () => {
  const { user } = useAuth(); // ✅ Get user from context
  const [showModal, setShowModal] = useState(false);

  // ✅ Don't show if not logged in
  if (!user) return null;

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          backgroundColor: '#ffcc00',
          color: '#000',
          borderRadius: '50%',
          padding: '15px',
          border: 'none',
          boxShadow: '0 0 10px rgba(255,204,0,0.5)',
          cursor: 'pointer',
          zIndex: 999,
        }}
        title="Calorie Calculator"
      >
        <FaCalculator size={22} />
      </button>

      {showModal && <CalorieModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default CalorieButton;
