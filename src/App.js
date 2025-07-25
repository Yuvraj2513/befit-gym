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
     
        
      
      {location.pathname !== '/loginsignup' && <Footer />}
      <CalorieButton />
      
      <WhatsAppButton />

      
    </>
  );
}
export default App;