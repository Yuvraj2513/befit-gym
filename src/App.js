import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CalorieButton from './components/CalorieButton';
import LoadingSpinner from './components/LoadingSpinner';
import { useAuth } from './context/AuthContext';

// Lazy load page components
const LoginSignup = lazy(() => import('./pages/LoginSignup'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Membership = lazy(() => import('./pages/Membership'));
const Trainers = lazy(() => import('./pages/Trainers'));
const Blog = lazy(() => import('./pages/Blog'));
const Account = lazy(() => import('./pages/Account'));

function App() {
  const location = useLocation();
  const { user } = useAuth();

  // Pages jahan layout chhupana hai
  const hideLayoutRoutes = ['/loginsignup'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && user && <Navbar />}
      <ScrollToTop />

      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/loginsignup" replace />} />
          <Route path="/loginsignup" element={<LoginSignup />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </Suspense>

      {/* Conditional Layout Buttons */}
      {!shouldHideLayout && user && <Footer />}
      {!shouldHideLayout && user && <CalorieButton />}
      {!shouldHideLayout && user && <WhatsAppButton />}
    </>
  );
}

export default App;
