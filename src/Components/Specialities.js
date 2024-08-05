import React, { useState } from 'react';
import './Specialities.css';

const specialities = [
  { name: 'General physician', price: '₹399', iconClass: 'icon-general-physician' },
  { name: 'Dermatology', price: '₹449', iconClass: 'icon-dermatology' },
  { name: 'Psychiatry', price: '₹499', iconClass: 'icon-psychiatry' },
  { name: 'Stomach and digestion', price: '₹399', iconClass: 'icon-stomach-digestion' },
  { name: 'Pediatrics', price: '₹499', iconClass: 'icon-pediatrics' },
  { name: 'Urology', price: '₹499', iconClass: 'icon-urology' },
  { name: 'Gynocology', price: '₹499', iconClass: 'icon-gynocology' },
];

const infiniteSpecialities = [...specialities, ...specialities, ...specialities];

const Specialities = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition((prev) => {
      if (prev <= 0) {
        return infiniteSpecialities.length * 220 - 800; 
      }
      return prev - 250;
    });
  };

  const scrollRight = () => {
    setScrollPosition((prev) => {
      if (prev >= infiniteSpecialities.length * 220 - 800) {
        return 0;
      }
      return prev + 220;
    });
  };

  return (
    <div className="specialities-container">
      <h2>25+ Specialities</h2>
      <p>Consult with top doctors across specialities</p>
      <div className="specialities-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
        <div className="specialities-grid" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {infiniteSpecialities.map((speciality, index) => (
            <div key={index} className="speciality-card">
              <div className={`speciality-icon ${speciality.iconClass}`} />
              <div className="speciality-details">
                <div className="speciality-name">{speciality.name}</div>
                <div className="speciality-price">{speciality.price}</div>
                <a href="/dermo" className="consult-now">Consult now</a>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default Specialities;
