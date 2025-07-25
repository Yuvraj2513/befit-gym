import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Account.css';

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <div className="account-page">
      <div className="account-box">
        <h2>Welcome, {user?.name}!</h2>
        <p>This is your personal account page. More features coming soon!</p>
        <p><strong>Email:</strong> {user?.sub}</p>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Account;