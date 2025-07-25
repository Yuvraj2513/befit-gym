import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignup.css';

// --- Mock API Layer ---
// This simulates calling a backend API for authentication.
// In a real application, these functions would make `fetch` requests to your server.

// In a real app, the secret is only on the server. This is for mock token generation.
const MOCK_JWT_SECRET = 'your-super-secret-key-for-dev';

// Creates a mock JWT. In a real app, the server does this.
const createMockToken = (payload) => {
  const header = { alg: 'HS256', typ: 'JWT' };
  // Signature is not cryptographically secure, just for simulation.
  return `${btoa(JSON.stringify(header))}.${btoa(JSON.stringify(payload))}.${btoa(MOCK_JWT_SECRET)}`;
};

const mockApi = {
  login: async (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.email === email);

    if (!foundUser) {
      throw new Error('User not found. Please sign up.');
    }
    if (foundUser.password !== password) {
      throw new Error('Incorrect password.');
    }

    const token = createMockToken({ sub: email, name: foundUser.name });
    return { token };
  },
  signup: async (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email === email)) {
      throw new Error('User already exists. Please login.');
    }

    const newUser = { name, email, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));

    const token = createMockToken({ sub: email, name });
    return { token };
  },
};
// --- End Mock API Layer ---

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateForm = (email, password, name) => {
    if (!email || !password || (!isLogin && !name)) {
      return 'All fields are required.';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Please enter a valid email address.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return null;
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const validationError = validateForm(email, password, name);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = isLogin
        ? await mockApi.login(email, password)
        : await mockApi.signup(name, email, password);
      login(response.token);
      navigate('/about');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
          {!isLogin && (
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
