import React from 'react';
import { trainers } from '../data/trainers';
import TrainerCard from '../components/TrainerCard';
import '../styles/Trainers.css';

const Trainers = () => {
  return (
    <div className="trainers-page">
      <div className="trainers-header">
        <h1>Meet Our Expert Trainers</h1>
        <p>Dedicated professionals to guide you on your fitness journey.</p>
      </div>
      <div className="trainers-grid">
        {trainers.map(trainer => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default Trainers;