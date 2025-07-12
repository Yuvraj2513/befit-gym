import React, { useState } from 'react';

const CalorieModal = ({ onClose }) => {
  const [form, setForm] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activity: '1.2',
  });

  const [calories, setCalories] = useState(null);
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateCalories = () => {
    const { age, gender, weight, height, activity } = form;

    if (!age || !weight || !height) return;

    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const totalCalories = Math.round(bmr * parseFloat(activity));
    setCalories(totalCalories);

    // 🔥 Diet Suggestion based on calories
    if (totalCalories < 1800) {
      setSuggestion("You should follow a lean protein-rich fat loss diet with 500–700 kcal deficit.");
    } else if (totalCalories >= 1800 && totalCalories <= 2400) {
      setSuggestion("You can follow a balanced maintenance diet with clean carbs and moderate protein.");
    } else {
      setSuggestion("Your body needs a calorie surplus. Go for a mass gain diet rich in carbs and protein.");
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.heading}>🔥 Calorie Calculator</h2>

        <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} style={styles.input} />
        <select name="gender" value={form.gender} onChange={handleChange} style={styles.input}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" name="weight" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} style={styles.input} />
        <input type="number" name="height" placeholder="Height (cm)" value={form.height} onChange={handleChange} style={styles.input} />
        <select name="activity" value={form.activity} onChange={handleChange} style={styles.input}>
          <option value="1.2">Sedentary (Little/no exercise)</option>
          <option value="1.375">Lightly active</option>
          <option value="1.55">Moderately active</option>
          <option value="1.725">Very active</option>
          <option value="1.9">Super active</option>
        </select>

        <button onClick={calculateCalories} style={styles.button}>Calculate</button>

        {calories && (
          <>
            <p style={styles.result}>🧮 Estimated Daily Calories: <strong>{calories} kcal/day</strong></p>
            <p style={styles.suggestion}>💡 {suggestion}</p>
          </>
        )}

        <button onClick={onClose} style={{ ...styles.button, backgroundColor: '#444', marginTop: 10 }}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  modal: {
    backgroundColor: '#222',
    padding: '30px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '400px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(255,204,0,0.4)',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#ffcc00',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '12px',
    border: 'none',
    backgroundColor: '#ffcc00',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1rem',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    fontSize: '1.1rem',
    color: '#0f0',
  },
  suggestion: {
    marginTop: '12px',
    fontSize: '0.95rem',
    color: '#ccc',
  },
};

export default CalorieModal;
