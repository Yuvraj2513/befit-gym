import React, { useState } from 'react';


const Contact = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Rating:", rating);
    console.log("Feedback:", feedback);
    setSubmitted(true);
  };

  return (
    

    
    <div className="contact-section" style={{
      background: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600') center center/cover no-repeat`,
      backgroundAttachment: 'fixed',
      padding: '60px 20px',
      color: 'white',
      minHeight: '100vh'
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: 'auto',
        boxShadow: '0 0 20px rgba(255, 204, 0, 0.3)'
      }}>
        <h2 style={{ textAlign: 'center', color: '#ffcc00', marginBottom: '30px' }}>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required style={inputStyle} />
          <input type="email" placeholder="Your Email" required style={inputStyle} />
          <textarea rows="4" placeholder="Your Message" required style={inputStyle}></textarea>
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>

        {/* Rating Section */}
        <div style={{ marginTop: '50px' }}>
          <h3 style={{ textAlign: 'center', color: '#ffcc00' }}>Rate Your Experience</h3>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                style={{
                  fontSize: '2rem',
                  color: (hovered || rating) >= star ? '#ffcc00' : '#888',
                  cursor: 'pointer',
                  transition: 'color 0.2s'
                }}
              >
                ★
              </span>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Optional feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="3"
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Submit Rating</button>
          </form>

          {submitted && (
            <p style={{ color: '#0f0', textAlign: 'center', marginTop: '15px' }}>
              ✅ Thank you for your rating!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Input/Btn style constants
const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  borderRadius: '8px',
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  fontSize: '1rem',
};

const buttonStyle = {
  background: '#ffcc00',
  color: '#000',
  border: 'none',
  padding: '12px',
  borderRadius: '8px',
  width: '100%',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background 0.3s',
};

export default Contact;
