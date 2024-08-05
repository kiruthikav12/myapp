import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookAppointment.css';

const BookAppointment = () => {
  const { doctorName } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleConfirm = () => {
    if (date.trim() === '' || time.trim() === '') {
      alert('Please select both date and time');
      return;
    }
    
    const appointment = { doctorName, date, time };
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    existingAppointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(existingAppointments));

    alert(`Appointment booked with Dr. ${doctorName} on ${date} at ${time}`);
    navigate('/paymentsetting');
  };

  const handleCancel = () => {
    setDate('');
    setTime('');
    navigate('/doctors');
  };

  return (
    <div className="container">
      <div className="formBox">
        <h3 className="header">Book Appointment with Dr. {doctorName}</h3>
        <div className="form">
          <div className="inputGroup">
            <label htmlFor="date" className="label">Select Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              className="input"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="time" className="label">Select Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={handleTimeChange}
              className="input"
            />
          </div>
          <div className="buttonGroup">
            <button onClick={handleConfirm} className="button">Confirm</button>
            <button onClick={handleCancel} className={`button cancelButton`}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
