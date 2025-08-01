import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HeroSection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleJoinNow = () => {
    navigate(user ? '/membership' : '/loginsignup');
  };

  const handleExplorePlans = () => {
    navigate(user ? '/membership' : '/loginsignup');
  };

  return (
    <div style={styles.hero}>
      {/* Optimized background image */}
      <img
        src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Gym Background"
        style={styles.backgroundImage}
        loading="eager"
        fetchpriority="high"
      />

      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <h1 style={styles.brandTitle}>BeFIT GYM</h1>
        <h2 style={styles.title}>Push Your Limits</h2>
        <p style={styles.subtitle}>
          Train hard. Stay strong. Join the BeFit movement today.
        </p>

        <div style={styles.buttons}>
          <button onClick={handleJoinNow} style={styles.btnPrimary}>Join Now</button>
          <button onClick={handleExplorePlans} style={styles.btnSecondary}>Explore Plans</button>
        </div>

        <div
          style={styles.scrollArrow}
          onClick={() =>
            document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          ↓
        </div>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1,
  },
  content: {
    color: 'white',
    textAlign: 'center',
    zIndex: 2,
    maxWidth: '90vw',
  },
  brandTitle: {
    fontSize: '3.8rem',
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: '10px',
    textTransform: 'uppercase',
    textShadow: '0 0 15px #ffcc00',
    letterSpacing: '2px',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ffcc00',
    textShadow: '2px 2px 10px black',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#eee',
    maxWidth: '700px',
    margin: 'auto',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '30px',
  },
  btnPrimary: {
    backgroundColor: '#ffcc00',
    padding: '12px 24px',
    borderRadius: '8px',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  btnSecondary: {
    border: '2px solid #ffcc00',
    padding: '12px 24px',
    borderRadius: '8px',
    color: '#ffcc00',
    background: 'transparent',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  scrollArrow: {
    fontSize: '2rem',
    marginTop: '30px',
    cursor: 'pointer',
    color: '#ffcc00',
    animation: 'bounce 1.5s infinite',
  },
};

export default HeroSection;
