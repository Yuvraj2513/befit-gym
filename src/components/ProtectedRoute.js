import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    // If the user is not authenticated, redirect them to the login page.
    // The `replace` prop prevents the user from navigating back to the
    // protected page after being redirected.
    return <Navigate to="/loginsignup" replace />;
  }

  // If the user is authenticated, render the child routes.
  return <Outlet />;
};

export default ProtectedRoute;