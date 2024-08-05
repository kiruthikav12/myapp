import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import DoctorsPage from './Components/DoctorsPage';
import BookAppointment from './Components/BookAppointment';
import Appointments from './Components/Appointments';
import EmergencyPage from './Components/EmergencyPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AboutUs from './Components/AboutUs';
import Thankyou from './Components/Thankyou';
import PaymentPage from './Components/PaymentPage';
import PaymentSettings from './Components/PaymentSettings';
import FAQ from './Components/FAQ';
import Dermo from './Components/Dermo';
function App() {
  return (
  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-doctors" element={<DoctorsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book-appointment/:doctorName" element={<BookAppointment />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="paymentpage" element={<PaymentPage />} />
        <Route path="paymentsetting" element={<PaymentSettings />} />
        <Route path="faq" element={<FAQ/>} />
        <Route path="dermo" element={<Dermo/>} />

      </Routes>
    </Router>
  );
}

export default App;
