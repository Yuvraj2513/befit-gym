import React from 'react';
import HeroSection from '../components/HeroSection';  // 👈 Import

import Testimonials from '../components/Testimonials';




import '../styles/About.css';

const About = () => {
  return (
     <>
      
      <HeroSection />
      
      

    <div id="about-section" className="about-section">
      <div className="overlay" />

      <div className="about-content">

        <h1 className="about-heading">Welcome to <span>BeFit Gym</span></h1>
        <p className="about-text">
          At BeFit, we believe in transforming lives through fitness. 
          Whether you're a beginner or a pro, our trainers and programs are built for real results.
        </p>
        


<div className="features">
  <div className="feature-card">
    <i className="fas fa-dumbbell"></i>
    <h3>Modern Equipment</h3>
    <p>Train with cutting-edge machines designed for all fitness levels.</p>
  </div>

  <div className="feature-card">
    <i className="fas fa-user-check"></i>
    <h3>Certified Trainers</h3>
    <p>Get expert guidance from top-level strength and wellness coaches.</p>
  </div>

  <div className="feature-card">
    <i className="fas fa-apple-alt"></i>
    <h3>Nutrition Guidance</h3>
    <p>Personalized diet plans to fuel your transformation journey.</p>
  </div>

  <div className="feature-card">
    <i className="fas fa-heartbeat"></i>
    <h3>Cardio & HIIT</h3>
    <p>High-intensity workouts that boost endurance & burn fat fast.</p>
  </div>

  <div className="feature-card">
    <i className="fas fa-spa"></i>
    <h3>Mental Wellness</h3>
    <p>Yoga, meditation & mindfulness for holistic body and mind health.</p>
  </div>

  <div className="feature-card">
    <i className="fas fa-calendar-alt"></i>
    <h3>Flexible Plans</h3>
    <p>Choose from daily, monthly, or annual plans that suit your routine.</p>
  </div>
</div>


        {/* Our Mission */}
        <div className="mission-block">
          <h2>Our Mission</h2>
          <p>
            At BeFit Gym, our mission is to empower every individual to unlock their full potential through 
            fitness. We’re committed to delivering excellence through science-backed workouts, expert trainers, 
            and a supportive environment. Whether it’s building strength, losing fat, or building confidence — 
            BeFit is your second home.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="why-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> 100% Focus on Transformation</li>
            <li><i className="fas fa-check-circle"></i> Clean, Safe & Sanitized Environment</li>
            <li><i className="fas fa-check-circle"></i> Nutrition + Fitness + Mindset = Real Results</li>
          </ul>
        </div>

        {/* Timings + Facilities */}
        <div className="timing-section">
          <h2>Timings & Facilities</h2>
          <div className="timing-grid">
            <div>
              <h4>Mon–Sat</h4>
              <p>5:00 AM – 10:00 PM</p>
            </div>
            <div>
              <h4>Sunday</h4>
              <p>7:00 AM – 2:00 PM</p>
            </div>
            <div>
              <h4>Facilities</h4>
              <p>Locker, Showers, Diet Plans, Group Classes</p>
            </div>
          </div>
        </div>

        {/* Real Gym Moments */}
<div className="gym-gallery">
  <h2>Our Gym In Action</h2>
  <div className="gallery-grid">
    <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600" alt="1" />
    <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600" alt="2" />
    <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600" alt="3" />
    <img src="https://images.pexels.com/photos/931324/pexels-photo-931324.jpeg?auto=compress&cs=tinysrgb&w=600" alt="4" />
    <img src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600" alt="5" />
  </div>
</div>
{/* Achievements Section */}
<div className="achievements">
  <h2>INSIGHTS</h2>
  <div className="achieve-grid">
    <div className="achieve-card">
      <i className="fas fa-dumbbell"></i>
      <h3>500+</h3>
      <p>Body Transformations</p>
    </div>
    <div className="achieve-card">
      <i className="fas fa-user-shield"></i>
      <h3>30+</h3>
      <p>Certified Trainers</p>
    </div>
    <div className="achieve-card">
      <i className="fas fa-award"></i>
      <h3>10+</h3>
      <p>Years of Service</p>
    </div>
    <div className="achieve-card">
      <i className="fas fa-users"></i>
      <h3>10,000+</h3>
      <p>Community Members</p>
    </div>
    
  </div>
</div>

<Testimonials />


      </div>
    </div>
    
    </>
    
  );
};

export default About;
