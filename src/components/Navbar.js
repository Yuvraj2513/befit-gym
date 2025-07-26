import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css'; // Import the new stylesheet

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate('/loginsignup'); // Redirect to login after logout
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={user ? "/about" : "/"} className="navbar-brand" onClick={closeMenu}>
          BeFit
        </Link>

        <button
          className="hamburger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li><NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>Gallery</NavLink></li>
          <li><NavLink to="/membership" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>Membership</NavLink></li>
          <li><NavLink to="/trainers" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>Trainers</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>Contact</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>Blog</NavLink></li>

          {user && (
            <li className="nav-user-section">
              <Link to="/account" onClick={closeMenu}>
                <img
                  src={user.photo || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
                  alt="Profile"
                  className="nav-avatar"
                  title="My Account"
                />
              </Link>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </li>
          )}
          {!user && (
            <li>
              <NavLink to="/loginsignup" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
