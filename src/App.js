import React from 'react';
import { Routes, Route,Navigate, useLocation } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import Membership from './pages/Membership';
import Trainers from './pages/Trainers';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Blog from './pages/Blog';
import CalorieButton from './components/CalorieButton';
import Account from './pages/Account';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/loginsignup" replace />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/gallery" element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
          <Route path="/membership" element={<ProtectedRoute><Membership /></ProtectedRoute>} />
          <Route path="/trainers" element={<ProtectedRoute><Trainers /></ProtectedRoute>} />
          <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
     
        
      
      {location.pathname !== '/loginsignup' && <Footer />}
      <CalorieButton />
      
      <WhatsAppButton />

      
    </>
  );
}
export default App;