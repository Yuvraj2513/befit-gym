import React, { createContext, useContext, useState, useEffect } from 'react';

// Helper to decode a mock JWT payload.
// In a real app, you'd use a library like jwt-decode.
// The signature should always be verified on the server.
const decodeToken = (token) => {
  try {
    // A real token has 3 parts, we only care about the payload (middle part)
    const payload = JSON.parse(atob(token.split('.')[1]));
    // In a real app, you'd also check the token's expiration (payload.exp)
    return payload;
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On initial load, check if a token exists and set the user state
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const userData = decodeToken(token);
      if (userData) {
        setUser(userData);
      }
    }
  }, []);

  const login = (token) => {
    const userData = decodeToken(token);
    if (userData) {
      localStorage.setItem('authToken', token);
      setUser(userData);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
