import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>CareHub</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>For patients</h4>
          <ul>
            <li>Search for doctors</li>
            <li>Search for clinics</li>
            <li>Search for hospitals</li>
            <li>Book Diagnostic Tests</li>
            <li>Read health articles</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>For doctors</h4>
          <ul>
            <li>CareHub Consult</li>
            <li>CareHub Health Feed</li>
            <li>CareHub Profile</li>
            <li>Online Doctor Consultation</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>For hospitals</h4>
          <ul>
            <li>Insta by CareHub</li>
            <li>Qikwell by CareHub</li>
            <li>CareHub Profile</li>
            <li>CareHub Reach</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <ul>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 CareHub. All rights reserved.</p>
        <div className="footer-img">
        </div>
      </div>
    </footer>
  );
}

export default Footer;
