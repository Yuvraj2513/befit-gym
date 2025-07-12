import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: 'Aarav Mehta',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    review: 'BeFit Gym completely changed my lifestyle. Trainers are amazing!',
  },
  {
    name: 'Simran Kaur',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    review: 'Zumba and yoga sessions helped me improve flexibility and health!',
  },
  {
    name: 'Rohit Sharma',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    rating: 5,
    review: 'The equipment and environment are top-notch. Highly recommended!',
  },
];

const Testimonials = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>💬 What Our Members Say</h2>
      <div style={styles.container}>
        {testimonials.map((t, index) => (
         <div key={index} style={styles.card} className="testimonial-card">

            <img src={t.image} alt={t.name} style={styles.image} />
            <h3 style={styles.name}>{t.name}</h3>
            <div style={styles.stars}>
              {'★'.repeat(t.rating)}
              {'☆'.repeat(5 - t.rating)}
            </div>
            <p style={styles.review}>{t.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    background: '#111',
    padding: '80px 20px',
    textAlign: 'center',
    color: '#fff',
  },
  heading: {
    fontSize: '2.4rem',
    marginBottom: '50px',
    color: '#ffcc00',
    textShadow: '0 0 10px rgba(255, 204, 0, 0.4)',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: '15px',
    padding: '25px',
    maxWidth: '300px',
    boxShadow: '0 0 20px rgba(255, 204, 0, 0.2)',
    transform: 'translateY(0)',
    transition: 'transform 0.4s ease',
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
    border: '3px solid #ffcc00',
  },
  name: {
    fontSize: '1.2rem',
    color: '#ffcc00',
    marginBottom: '5px',
  },
  stars: {
    color: '#ffcc00',
    fontSize: '1rem',
    marginBottom: '10px',
  },
  review: {
    color: '#ccc',
    fontSize: '0.95rem',
    lineHeight: 1.5,
  },
};

export default Testimonials;
 