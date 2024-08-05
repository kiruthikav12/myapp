import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [otp, setOtp] = useState(''); 
  const [error, setError] = useState(''); 
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate(); 
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
      setError('');
    } else {
      setError('Please enter a valid phone number.');
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setOtp(value);
      setError('');
    } else {
      setError('Please enter a valid OTP.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) { 
      setOtpSent(true);
      alert('OTP has been sent to your phone number.');
    } else {
      setError('Phone number must be 10 digits long.');
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) { 
      alert('Successfully logged in.');
      navigate('/'); 
    } else {
      setError('OTP must be 6 digits long.');
    }
  };

  return (
    <div className="container">
      <div className="container-inner">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="phone" className="login-label">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
            className="login-input"
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">Send OTP</button>
        </form>

        {otpSent && (
          <div className="otp-container">
            <label htmlFor="otp" className="otp-label">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              className="otp-input"
            />
            <button type="button" className="verify-button" onClick={handleVerifyOtp}>
              Verify OTP
            </button>
          </div>
        )}

        <p className="signup-prompt">
          Don't have an account? <span className="signup-link" onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
