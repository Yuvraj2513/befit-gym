import React from 'react';
import '../styles/Trainers.css'; // Adjust path if needed


const trainerData = [
  {
    name: "Aarav Mehta",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Strength Coach with 7+ years of experience in muscle building & transformation.",
  },
  {
    name: "Simran Kaur",
    image: "https://images.pexels.com/photos/28061/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    description: "Yoga & Wellness Coach focused on holistic healing, flexibility, and stress relief.",
  },
  {
    name: "Rohit Sharma",
    image: "https://thumbs.dreamstime.com/b/proud-fitness-trainer-his-gym-confident-exercise-coach-gym-indian-fit-man-arms-crossed-bodybuilding-creates-proud-263412438.jpg",
    description: "HIIT Expert who leads energetic group classes and personal weight loss coaching.",
  },
  {
    name: "Piyush Desai",
    image: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Functional Coach with a passion for posture correction and strength mobility.",
  },
  {
    name: "Kunal Joshi",
    image: "https://img.freepik.com/premium-photo/portrait-personal-trainer-sportswear-fitness-center-gym_109710-1637.jpg",
    description: "CrossFit & Endurance Trainer | Helping athletes improve strength and stamina.",
  },
  {
    name: "Neha Kapoor",
    image: "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Zumba Instructor who turns workouts into vibrant dance fitness sessions.",
  },
  {
    name: "Arjun Nair",
    image: "https://tse2.mm.bing.net/th/id/OIP.bIp1ps8swiQLyikn4HGWvAHaIX?r=0&w=503&h=568&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Bodybuilding Specialist | Trains pro athletes & competitive bodybuilders.",
  },
  {
    name: "Sana Sheikh",
    image: "https://images.pexels.com/photos/4927363/pexels-photo-4927363.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Cardio & Fat Burn Expert | Specializes in beginner-friendly weight loss plans.",
  },
  {
    name: "Harshita",
    image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Sports Conditioning Coach | Trains footballers and sprinters for explosive speed.",
  },
  {
    name: "Aarav Jain",
    image: "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Pilates Coach | Focused on core strength, flexibility and injury rehab training.",
  },
  {
    name: "Ravi Verma",
    image: "https://as1.ftcdn.net/v2/jpg/05/24/37/84/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg",
    description: "Powerlifting Coach | Helps members gain raw strength through structured lifting plans.",
  },
  {
    name: "Dev Rajput",
    image: "https://images.pexels.com/photos/3768723/pexels-photo-3768723.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Group Fitness & Bootcamp Instructor | Engaging workouts that build strength & community.",
  },
];

const Trainers = () => {
  return (

    
    <div className="overlay">
      <h1>Meet Our Expert Trainers</h1>
      <div className="trainers">
        {trainerData.map((trainer, index) => (
          <div className="trainer" key={index}>
            <img src={trainer.image} alt={trainer.name} />
            <h2>{trainer.name}</h2>
            <p>{trainer.description}</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <p><strong>BeFit Gym</strong> — Our trainers are your partners in every rep, every goal, every transformation.</p>
      </div>
    </div>
  );
};

export default Trainers;
