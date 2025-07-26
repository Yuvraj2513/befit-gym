import React from 'react';
import { trainers } from '../data/trainers';
import TrainerCard from '../components/TrainerCard';
import '../styles/Trainers.css';

const Trainers = () => {
  // In a real app, this data would come from an API call,
  // and we'd have loading and error states.
  // For now, we'll handle the case where data might be missing or empty.

  const renderContent = () => {
    // Error state: Data could not be loaded
    if (!trainers) {
      return <p className="trainers-feedback">Could not load trainer data. Please try again later.</p>;
    }

    // Empty state: No trainers to display
    if (trainers.length === 0) {
      return <p className="trainers-feedback">No trainers are available at the moment. Please check back soon!</p>;
    }

    // Success state: Render the grid of trainers
    return (
      <div className="trainers-grid">
        {trainers.map(trainer => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    );
  };

  return (
    <div className="trainers-page">
      <div className="trainers-header">
        <h1>Meet Our Expert Trainers</h1>
        <p>Dedicated professionals to guide you on your fitness journey.</p>
      </div>
      {renderContent()}
    </div>
  );
};

export default Trainers;