import React, { useState, useEffect } from 'react';
import './Appointments.css';

const Appointments= () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = () => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="appointments-container">
      <h1>Your Appointments</h1>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="appointments-list">
          {appointments.map((appointment, index) => (
            <div key={index} className="appointment-card">
              <h2>{appointment.doctorName}</h2>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
