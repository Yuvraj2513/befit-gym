import React from 'react';
import '../styles/Gallery.css';


const galleryItems = [
  {
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Battle Ropes",
    description: "Rope training for cardio and strength",
  },
  {
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Deadlift",
    description: "Barbell deadlift exercise",
  },
  {
    image: "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Running / Cardio",
    description: "Treadmill running for endurance and fat burn",
  },
  {
    image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Treadmill Section",
    description: "Cardio equipment area with modern treadmills",
  },
  {
    image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Barbell Squats",
    description: "Heavy squats with barbell",
  },
  {
    image: "https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg",
    title: "Pull-Up",
    description: "Strenghthen your arms and shoulder",
  },
  {
    image: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg",
    title: "Dumbbel Bicep curl",
    description: "Bend elbows, lift weights, contract biceps, repeat. ",
  },
  {
    image: "https://images.pexels.com/photos/931324/pexels-photo-931324.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Rope Climbing",
    description: "Upper body and grip strength training",

  },
  {
    image: "https://images.pexels.com/photos/28076/pexels-photo.jpg",
    title: "Leg Press",
    description: "Machine exercise strengthens legs by pushing weight",
    
  },
  {
    image: "https://images.pexels.com/photos/11433059/pexels-photo-11433059.jpeg",
    title: "Dumbell Press",
    description: "Press dumbbells upwards, targeting chest muscles",
    
  },
];

const Gallery = () => {
  return (

    
    <div className="gallery-overlay">
      <h1 className="gallery-heading">Explore Our Gym in Action</h1>
      
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-footer">
        <p><strong>BeFit Gym</strong> — A place where passion meets performance. Come experience the energy!</p>
      </div>
    </div>
  );
};

export default Gallery;
