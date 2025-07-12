import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignup.css';


const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name ? form.name.value : '';

    if (isLogin) {
      handleLogin(email, password);
    } else {
      handleSignup(name, email, password);
    }
  };

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const found = users.find(u => u.email === email);
  
    if (!found) return setError('User not found. Please sign up.');
    if (found.password !== password) return setError('Incorrect password.');
  
    console.log('✅ Logged in:', found);
    login({ name: found.name, email });
    navigate('/about');
  };
  

  const handleSignup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.some(u => u.email === email);
    if (exists) return setError('User already exists. Please login.');

    const newUser = { name, email, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));

    login({ name:name, email });
navigate('/about');    // ✅ NEW


  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-toggle">
          <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
          <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Sign Up</button>
        </div>

        {error && <p style={{ color: 'tomato', textAlign: 'center' }}>{error}</p>}

        <form className="login-form" onSubmit={handleAuth}>
          {!isLogin && <input name="name" type="text" placeholder="Full Name" required />}
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
