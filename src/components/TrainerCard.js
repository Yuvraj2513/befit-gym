import React from 'react';

const TrainerCard = ({ trainer }) => {
  return (
    <div className="trainer-card">
      <div className="trainer-image-wrapper">
        <img src={trainer.image} alt={trainer.name} className="trainer-image" />
      </div>
      <div className="trainer-info">
        <h3 className="trainer-name">{trainer.name}</h3>
        <p className="trainer-specialty">{trainer.specialty}</p>
        <p className="trainer-bio">{trainer.bio}</p>
      </div>
    </div>
  );
};

export default TrainerCard;