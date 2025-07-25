import React from 'react';
import StatsCounter from '../components/StatsCounter';
import { plans } from '../data/plans';
import PlanCard from '../components/PlanCard';
import '../styles/Membership.css';

const Membership = () => {
  return (
    <div className="membership-page">
      <div className="membership-overlay">
        <StatsCounter />

        <div className="membership-header">
          <h1>Choose Your Plan</h1>
          <p>Flexible plans for every goal and budget.</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="membership-footer">
          <p><strong>BeFit Gym</strong> — No matter your goal, we have a plan to get you there.</p>
        </div>
      </div>
    </div>
  );
};

export default Membership;