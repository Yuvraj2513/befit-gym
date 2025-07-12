import React from 'react';
import StatsCounter from '../components/StatsCounter';

const plans = [
  {
    name: 'Trial Pack',
    price: '₹299 / 7 Days',
    features: ['Limited Gym Access', '1 Trainer Session', 'Basic Machines'],
    button: 'Start Trial',
  },
  {
    name: 'Starter',
    price: '₹999 / month',
    features: ['Gym Access (Daytime)', '2 Personal Trainer Sessions', 'Basic Diet Plan'],
    button: 'Join Now',
  },
  {
    name: 'Standard',
    price: '₹1499 / month',
    features: ['24/7 Gym Access', '4 Trainer Sessions', 'Advanced Diet Plan', 'Weekly Body Checkups'],
    button: 'Join Now',
  },
  {
    name: 'Premium',
    price: '₹2199 / month',
    features: ['Unlimited Gym Access', 'Daily Personal Trainer', 'Customized Diet & Workout', 'Body Composition Analysis', 'Sauna & Steam Room'],
    button: 'Join Now',
  },
  {
    name: 'Couple Plan',
    price: '₹3499 / month',
    features: ['Access for 2 Adults', 'All Premium Benefits', 'Diet & Workout for Couples', 'Free Couples Yoga Class'],
    button: 'Join Together',
  },
  {
    name: 'Elite Yearly',
    price: '₹19,999 / year',
    features: ['All Premium Benefits', 'Free Gym Merchandise', 'Priority Support', 'Monthly Progress Report'],
    button: 'Join Yearly',
  },
  {
    name: 'Student Special',
    price: '₹799 / month',
    features: ['Valid Student ID Required', 'Gym Access (6am–6pm)', 'Free Group Classes'],
    button: 'Enroll Now',
  },
  {
    name: 'Weekend Warrior',
    price: '₹499 / month',
    features: ['Saturday & Sunday Access', 'All Machines Access', 'Group Classes Included'],
    button: 'Get Started',
  },
  {
    name: 'Senior Citizen Plan',
    price: '₹599 / month',
    features: ['Light Fitness Program', 'Physiotherapist Support', 'Free Health Checkups'],
    button: 'Join Today',
  },
  {
    name: 'Corporate Plan',
    price: '₹14,999 / year',
    features: ['Minimum 5 Members', 'Company Tie-up Discounts', 'Onsite Fitness Sessions'],
    button: 'Contact Us',
  },
];

const Membership = () => {
  return (

    
    <div
      style={{
        background: 'url("https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1600") center/cover no-repeat fixed',
        minHeight: '100vh',
        padding: '60px 20px',
        color: 'white',
      }}
    >
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', padding: '60px 20px', borderRadius: '12px' }}>
        <h1
          style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#ffcc00',
            marginBottom: '50px',
          }}
        >
          <StatsCounter />
          Choose Your Membership Plan
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            maxWidth: '1600px',
            margin: 'auto',
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1e1e1e',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 0 18px rgba(255, 204, 0, 0.5)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-12px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <h2 style={{ fontSize: '1.9rem', marginBottom: '12px', color: '#fff' }}>{plan.name}</h2>
              <p style={{ fontSize: '2.4rem', color: '#ffcc00', margin: '20px 0' }}>{plan.price}</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginTop: '20px', color: '#ddd' }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: '10px' }}>✅ {feature}</li>
                ))}
              </ul>
              <button
                style={{
                  marginTop: '25px',
                  background: '#ffcc00',
                  color: '#000',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '25px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#e6b800')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#ffcc00')}
              >
                {plan.button}
              </button>
            </div>
          ))}
          

        </div>

        <div style={{ textAlign: 'center', marginTop: '70px', fontSize: '1.1rem', color: '#bbb' }}>
          <p><strong>BeFit Gym</strong> — No matter your goal, we have a plan to get you there.</p>
        </div>
      </div>
    </div>
    
  );
};

export default Membership;
