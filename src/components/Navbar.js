import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path) => ({
    color: location.pathname === path ? '#fff' : '#ffcc00',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    padding: '10px 15px',
    borderBottom: location.pathname === path ? '2px solid #ffcc00' : 'none',
    display: 'block'
  });

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>

        {/* Profile & Hamburger */}
        <div style={styles.left}>
          {user ? (
            <Link to="/account" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={user.photo || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
                alt="Profile"
                style={styles.avatar}
              />
            </Link>
          ) : null}

          <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
            {menuOpen ? <FaTimes size={24} color="#ffcc00" /> : <FaBars size={24} color="#ffcc00" />}
          </button>
        </div>

        {/* Nav Links */}
        <ul style={{ ...styles.links, ...(menuOpen ? styles.linksOpen : {}) }}>
          {!user && (
            <li>
              <Link to="/loginsignup" style={linkStyle('/loginsignup')} onClick={() => setMenuOpen(false)}>
                Login / Sign Up
              </Link>
            </li>
          )}

          <li><Link to="/about" style={linkStyle('/about')} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/gallery" style={linkStyle('/gallery')} onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/membership" style={linkStyle('/membership')} onClick={() => setMenuOpen(false)}>Membership</Link></li>
          <li><Link to="/trainers" style={linkStyle('/trainers')} onClick={() => setMenuOpen(false)}>Meet Our Expert Trainers</Link></li>
          <li><Link to="/contact" style={linkStyle('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/blog" style={linkStyle('/blog')} onClick={() => setMenuOpen(false)}>Blog</Link></li>

          {user && (
            <li>
              <button onClick={logout} style={styles.logoutBtn}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#111',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    flexWrap: 'wrap',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  avatar: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    border: '2px solid #ffcc00',
    objectFit: 'cover',
  },
  hamburger: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
    display: 'block',
  },
  links: {
    display: 'none',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '15px',
    width: '100%',
  },
  linksOpen: {
    display: 'flex',
  },
  logoutBtn: {
    background: 'none',
    border: 'none',
    color: '#ffcc00',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    textAlign: 'left',
  }
};

export default Navbar;
