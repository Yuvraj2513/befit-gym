// ✅ Blog.js - Blog page with gym background
import React, { useState } from 'react';
import '../styles/Blog.css';

const blogData = [
  { id: 1, title: 'Fat Loss Exercises', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg', description: 'HIIT, Jump Rope, Treadmill Running, and Battle Ropes help torch calories efficiently.' },
  { id: 2, title: 'Muscle Gain Workout', image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg', description: 'Focus on compound lifts: Deadlifts, Squats, Bench Press, and Pull-ups.' },
  { id: 3, title: 'Flexibility & Mobility', image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg', description: 'Try dynamic stretching, yoga flow, and foam rolling sessions.' },
  { id: 4, title: 'Strength Training', image: 'https://images.pexels.com/photos/3837756/pexels-photo-3837756.jpeg', description: 'Progressive overload on Squats, Bench, and Rows for optimal gains.' },
  { id: 5, title: 'Cardio for Endurance', image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg', description: 'Use incline walking, spin bikes, or swimming to increase cardiovascular stamina.' },
  { id: 6, title: 'Back & Biceps Workout', image: 'https://images.pexels.com/photos/28061/pexels-photo.jpg', description: 'Rows, Pull-ups, and Hammer Curls build thickness and definition.' },
  { id: 7, title: 'Chest & Triceps Workout', image: 'https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg', description: 'Push-ups, Dips, and Bench Press target the full upper body.' },
  { id: 8, title: 'Yoga for Mindfulness', image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg', description: 'Yoga improves posture, flexibility and reduces stress.' },
  { id: 9, title: 'Calisthenics Basics', image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg', description: 'Use your bodyweight to build serious strength.' },
  { id: 10, title: 'Home Workout Hacks', image: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg', description: 'Train smart at home with resistance bands and bodyweight drills.' },
  { id: 11, title: 'Warmup & Cooldown', image: 'https://images.pexels.com/photos/4498290/pexels-photo-4498290.jpeg', description: 'Don’t skip warmups and cooldowns to prevent injuries.' },
  { id: 12, title: 'Nutrition for Gains', image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg', description: 'Fuel your muscles with clean carbs, protein, and fiber-rich foods.' },
  
  { id: 14, title: 'Core Stability Plan', image: 'https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg', description: 'Planks, crunches and twists for bulletproof abs.' },
  { id: 15, title: 'Foam Rolling Benefits', image: 'https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg', description: 'Myofascial release helps relieve muscle soreness and tightness.' },
];

const Blog = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleCard = (id) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const visibleCards = showAll ? blogData : blogData.slice(0, 6);

  return (
    <div
      className="blog-container"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div style={{ backgroundColor: 'rgba(0,0,0,0.85)', padding: '40px 20px' }}>
        <h1 className="blog-heading">Fitness Tips & Workout Plans</h1>

        <div className="card-grid">
          {visibleCards.map((item, index) => (
            <React.Fragment key={item.id}>
              <div
                className={`blog-card ${selectedCard === item.id ? 'active' : ''}`}
                onClick={() => toggleCard(item.id)}
              >
                <img src={item.image} alt={item.title} className="card-img" />
                <h3 className="card-title">{item.title}</h3>
                {selectedCard === item.id && (
                  <div className="card-desc">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>

              {!showAll && index === 5 && (
                <div className="see-more-inline">
                  <button onClick={toggleShowAll} className="load-more-btn">See More</button>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {showAll && (
          <div className="load-more-wrapper">
            <button onClick={toggleShowAll} className="load-more-btn">See Less</button>
          </div>
          
        )}
        {/* -------------------- Diet Plan Section --------------------- */}
<div className="diet-section">
  <h2 className="diet-heading">🏋️‍♂️ Recommended Diet Plans</h2>

  <div className="diet-grid">

    <div className="diet-card">
      <h3>🔥 Fat Loss Diet</h3>
      <ul>
        <li>Oats – 68 kcal (per 100g)</li>
        <li>Boiled Egg – 78 kcal</li>
        <li>Grilled Chicken – 165 kcal (per 100g)</li>
        <li>Broccoli – 55 kcal (per 100g)</li>
        <li>Green Tea – 0 kcal</li>
      </ul>
    </div>

    <div className="diet-card">
      <h3>💪 Muscle Gain Diet</h3>
      <ul>
        <li>Brown Rice – 112 kcal (per 100g)</li>
        <li>Whole Eggs – 143 kcal</li>
        <li>Whey Protein – 120 kcal (1 scoop)</li>
        <li>Sweet Potato – 86 kcal (per 100g)</li>
        <li>Banana – 105 kcal</li>
      </ul>
    </div>

    <div className="diet-card">
      <h3>🍎 Balanced Diet</h3>
      <ul>
        <li>Chapati – 70 kcal</li>
        <li>Paneer – 265 kcal (per 100g)</li>
        <li>Dal – 116 kcal (per bowl)</li>
        <li>Salad – 50 kcal</li>
        <li>Fruit Bowl – 120 kcal</li>
      </ul>
    </div>

  </div>
</div>

      </div>
    </div>
  );
};

export default Blog;
