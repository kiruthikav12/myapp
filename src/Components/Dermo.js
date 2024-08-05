import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorsPage.css';

const doctors = [
  { id: 1, name: 'Dr. Sangavi', specialty: 'Cardiologist', fee: 100, bio: 'Dr. Sangavi is an experienced cardiologist with over 20 years of experience.', imageUrl: 'doc1', rating: 4.5 },
  { id: 2, name: 'Dr. Madhumitha', specialty: 'Dermatologist', fee: 80, bio: 'Dr. Madhumitha specializes in treating skin conditions and has 15 years of practice.', imageUrl: 'doc2', rating: 4.0 },
  { id: 3, name: 'Dr. Kiruthika', specialty: 'Neurologist', fee: 150, bio: 'Dr. Kiruthika is a renowned neurologist known for her research in neurodegenerative diseases.', imageUrl: 'doc3', rating: 4.8 },
  { id: 4, name: 'Dr. Keerthana', specialty: 'Orthopedic', fee: 120, bio: 'Dr. Keerthana is a leading orthopedic surgeon with 18 years of experience.', imageUrl: 'doc4', rating: 4.6 },
  { id: 5, name: 'Dr. Malavika', specialty: 'Pediatrician', fee: 90, bio: 'Dr. Malavika is a dedicated pediatrician committed to providing the best care for children.', imageUrl: 'doc5', rating: 4.7 },
  { id: 6, name: 'Dr. Kowshika', specialty: 'Psychiatrist', fee: 110, bio: 'Dr. Kowsshika has a deep understanding of mental health and has been practicing for over 14 years.', imageUrl: 'doc6', rating: 4.3 },
];

const Dermo = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="stars">
        {Array(fullStars).fill().map((_, i) => (
          <span key={`full-${i}`}>&#9733;</span>
        ))}
        {halfStar && <span key="half">&#9733;</span>}
        {Array(emptyStars).fill().map((_, i) => (
          <span key={`empty-${i}`}>&#9734;</span>
        ))}
      </div>
    );
  };

  return (
    <div className="home-page">
      <div className="doctor-cards">
        {doctors.map(doctor => (
          <div key={doctor.id} className={`doctor-card ${doctor.imageUrl}`}>
            <div className="doctor-image"></div> 
            <h2>{doctor.name}</h2>
            <p>Specialty: {doctor.specialty}</p>
            <p>Fee: ${doctor.fee}</p>
            <p>{doctor.bio}</p>
            {renderStars(doctor.rating)}
            <Link to={`/book-appointment/${doctor.name}`}>
              <button className="consult-btn">Consult Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dermo;
