import React from 'react';
import '../styles/PlanCard.css';

const PlanCard = ({ plan }) => {
  return (
    <div className="plan-card">
      <h2 className="plan-name">{plan.name}</h2>
      <p className="plan-price">{plan.price}</p>
      <ul className="plan-features">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="plan-feature-item">
            ✅ {feature}
          </li>
        ))}
      </ul>
      <button className="plan-button">
        {plan.button}
      </button>
    </div>
  );
};

export default PlanCard;