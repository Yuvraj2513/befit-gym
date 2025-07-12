// ✅ src/pages/Account.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import defaultAvatar from '../assets/default-avatar.png'; // Add your own avatar image in assets folder
import '../styles/Account.css';

const Account = () => {
  const { user, logout } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [mobile, setMobile] = useState(user?.mobile || '');
  const [avatar, setAvatar] = useState(user?.avatar || defaultAvatar);

  const [plan] = useState('Gold Monthly');
  const [startDate] = useState('2025-07-01');
  const [renewDate] = useState('2025-07-31');

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
      localStorage.setItem('avatar', imageUrl);
    }
  };

  const handleSave = () => {
    localStorage.setItem('userName', name);
    localStorage.setItem('mobile', mobile);
    alert('✅ Info updated!');
  };

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedMobile = localStorage.getItem('mobile');
    const storedAvatar = localStorage.getItem('avatar');
    if (storedName) setName(storedName);
    if (storedMobile) setMobile(storedMobile);
    if (storedAvatar) setAvatar(storedAvatar);
  }, []);

  return (
    <div className="account-container">
      <h2 className="account-heading">My Account</h2>

      <div className="avatar-wrapper">
        <label htmlFor="avatar-upload">
          <img src={avatar} alt="Profile" className="avatar" title="Click to change" />
        </label>
        <input id="avatar-upload" type="file" accept="image/*" onChange={handleAvatarChange} hidden />
      </div>

      <div className="section">
        <h3>👤 Personal Details</h3>

        <div className="detail-row">
          <label>Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
        </div>

        <div className="detail-row">
          <label>Mobile Number</label>
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile Number" />
        </div>

        <div className="detail-row">
          <label>Email (fixed)</label>
          <input type="email" value={user.email} disabled />
        </div>

        <button className="save-btn" onClick={handleSave}>Save Info</button>
      </div>

      <div className="section">
        <h3>📋 My Plan</h3>
        <p><strong>Plan:</strong> {plan}</p>
        <p><strong>Start Date:</strong> {startDate}</p>
        <p><strong>Renewal Date:</strong> {renewDate}</p>
      </div>

      <div className="section">
        <h3>🏋️ Exercise Routine</h3>
        <ul>
          <li>Monday: Chest & Triceps</li>
          <li>Tuesday: Back & Biceps</li>
          <li>Wednesday: Legs</li>
          <li>Thursday: Shoulders</li>
          <li>Friday: Cardio + Core</li>
        </ul>
      </div>

      <div className="section">
        <h3>🍎 Diet Plan</h3>
        <ul>
          <li>Breakfast: Oats + Eggs</li>
          <li>Lunch: Rice + Chicken + Salad</li>
          <li>Snacks: Banana + Whey</li>
          <li>Dinner: Veg + Roti + Paneer</li>
        </ul>
      </div>

      <div className="logout-section">
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Account;
