import React from 'react';
import Navbar from './Navbar';
import './EmergencyPage.css';

const EmergencyPage = () => {
  return (
    <div>
      <Navbar />
      <div className="emergency-container">
        <div className="alert-banner">
          <h1>Emergency Alert</h1>
          <p>Immediate Action Required</p>
        </div>
        <div className="emergency-content">
          <p>If you are experiencing a medical emergency, please follow the instructions below. Contact emergency services immediately and seek help.</p>
          <p>Unable to fetch location. Please enable location services.</p>
          <div className="button-container">
            <button className="call-hospital">CALL HOSPITAL</button>
            <button className="request-ambulance">REQUEST AMBULANCE</button>
          </div>
        </div>
        <div className="emergency-tips-container">
          <h2>Quick Emergency Tips</h2>
          <ul className="emergency-tips">
            <li>Stay calm and assess the situation.</li>
            <li>Call emergency services immediately.</li>
            <li>Provide first aid if you're trained to do so.</li>
          </ul>
        </div>
        <div className="emergency-tips-container">
          <h2>Emergency Contacts</h2>
          <ul className="emergency-tips">
            <li><strong>Poison Control:</strong> 1-800-222-1222</li>
            <li><strong>Fire Department:</strong> 911</li>
            <li><strong>Police Station:</strong> 911</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;
