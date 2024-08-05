// Signup.js
import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: '',
    experience: '',
    licenseNumber: ''
  });

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setFormData({
      name: '',
      email: '',
      password: '',
      specialization: '',
      experience: '',
      licenseNumber: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    alert(`Signed up as ${userType}`);
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <h1>Signup</h1>
      <div className="user-type-selection">
        <button onClick={() => handleUserTypeChange('Doctor')}>Doctor</button>
        <button onClick={() => handleUserTypeChange('Patient')}>Patient</button>
      </div>

      {userType && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          {userType === 'Doctor' && (
            <>
              <div className="form-group">
                <label>Specialization:</label>
                <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Experience (years):</label>
                <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>License Number:</label>
                <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} required />
              </div>
            </>
          )}

          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default Signup;
