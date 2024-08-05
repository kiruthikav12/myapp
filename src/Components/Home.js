import React from 'react';
import './Home.css'; 
import Navbar from './Navbar'; 
import Specialities from './Specialities'; 
import { useNavigate } from 'react-router-dom'; 
import Footer from './Footer';

function Home() {
  const navigate = useNavigate(); 

  const handleAppointmentClick = () => {
    alert('Please login/signup first'); 
    navigate('/login'); 
  };

  return (
    <div className="home-page">
      <Navbar /> 
      
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Doctor Consultant Service</h1>
          <p>Your health is our priority. Get expert advice and personalized care from our experienced doctors.</p>
          <a href="#appointment" className="cta-button" onClick={handleAppointmentClick}>Book an Appointment</a>
        </div>
      </section>

      <Specialities /> 


      <Footer />
    </div>
  );
}

export default Home;
