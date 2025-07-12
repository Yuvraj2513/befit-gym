import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  const styles = {
    footer: {
      background: '#111',
      color: '#ccc',
      padding: '40px 20px 20px',
      fontFamily: 'Segoe UI, sans-serif',
      marginTop: 'auto',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '30px',
      maxWidth: '1200px',
      margin: 'auto',
    },
    section: {
      flex: '1 1 250px',
    },
    heading: {
      color: '#ffcc00',
      marginBottom: '10px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    link: {
      color: '#ccc',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '6px',
    },
    linkHover: {
      color: '#ffcc00',
    },
    icons: {
      fontSize: '1.2rem',
      color: '#ccc',
      marginRight: '15px',
    },
    iconsHover: {
      color: '#ffcc00',
    },
    bottom: {
      textAlign: 'center',
      marginTop: '30px',
      borderTop: '1px solid #444',
      paddingTop: '15px',
      fontSize: '0.9rem',
      color: '#aaa',
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Left Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>BeFit Gym</h3>
          <p>123 Fitness Street, Muscle Town</p>
          <p>Email: contact@befitgym.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* Center Links */}
        <div style={styles.section}>
  <h4 style={styles.heading}>Quick Links</h4>
  <ul style={styles.list}>
    <li><Link to="/about" style={styles.link}>About</Link></li>
    <li><Link to="/trainers" style={styles.link}>Trainers</Link></li>
    <li><Link to="/membership" style={styles.link}>Membership</Link></li>
    <li><Link to="/gallery" style={styles.link}>Gallery</Link></li>
    <li><Link to="/contact" style={styles.link}>Contact</Link></li>
    <li><Link to="/blog" style={styles.link}>Blog</Link></li>

  </ul>
</div>

        {/* Social Icons */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div>
            <a href="#"><i className="fab fa-facebook-f" style={styles.icons}></i></a>
            <a href="#"><i className="fab fa-instagram" style={styles.icons}></i></a>
            <a href="#"><i className="fab fa-twitter" style={styles.icons}></i></a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} BeFit Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
