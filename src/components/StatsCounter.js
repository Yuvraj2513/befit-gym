import React from 'react';
import CountUp from 'react-countup';
import '../styles/StatsCounter.css'; // ✅ We'll create this next

const StatsCounter = () => {
  const stats = [
    { label: 'Happy Members', end: 1500 },
    { label: 'Expert Trainers', end: 25 },
    { label: 'Daily Sessions', end: 40 },
    { label: 'Successful Transformations', end: 1200 }
  ];

  return (
    <div className="stats-wrapper">
      <div className="stats-heading">
        <h2>Our Gym Achievements</h2>
        <p>Trusted by thousands. Powered by results.</p>
      </div>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>
              <CountUp end={stat.end} duration={2.5} separator="," />
              +
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
